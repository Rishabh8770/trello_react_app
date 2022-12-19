import React, { Component } from 'react';
import * as trelloApi from '../Api'
import {Button, InputGroup} from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class CheckItems extends React.Component {
    state = { 
        checkItemList: [],
        itemName:""
     } 

    componentDidMount(){
        trelloApi.getCheckItems(this.props.itemsId).then((res) => {
            this.setState({
                checkItemList: res.data,
            })
        })
    }

    handleAddItems = async (val, e) => {
        await trelloApi.addCheckItems(val, this.state.itemName).then((res) =>{
            this.setState({
                itemName: "",
                checkItemList: [...this.state.checkItemList, res.data]
            })
        })
    }

    onChange = (e) => {
        this.setState({
            itemName: e.target.value,
        })
    }

    handleDeleteItem = (e, val, idCheckItem) => {
        trelloApi.deleteItem(val, idCheckItem)
        let newItemList = this.state.checkItemList.filter((item) => {
            return item.id !== idCheckItem
        })
        this.setState({
            checkItemList: newItemList,
        })
    }

    handleCheckItemStatus = (id, idCheckItem ,status) =>{
        let state;
        if(status === true){
            state = 'complete'
        } else {
            state = 'incomplete'
        }
        trelloApi.checkItemStatus(id, idCheckItem, state).then((res) => {
            let checkItemList = this.state.checkItemList.filter((update) => {
                if(update.id === res.data.id) {
                    update.state = state;
                    return update
                }else{
                    return update
                }
            })

            this.setState({
                checkItemList
            })
        })
    }

    render() { 
        let status;
        return (  
            <div style={{margin:'2px'}}>
                {this.state.checkItemList.map((check) => {
                    if(check.state === 'complete'){
                        status = true
                    }else{
                        status = false
                    }
                    return(
                        <div key={check.id}>
                        <InputGroup style={{display:'flex', border:'1px solid black', justifyContent:'space-between', margin:'3px'}} >
                        <InputGroup.Checkbox checked={status} onChange={(e) => this.handleCheckItemStatus(this.props.cardId, check.id, e.target.checked)} ></InputGroup.Checkbox>
                        <p style={{margin:'5px'}}>{check.name}</p>
                        <button  style={{height:'2rem', width:'2rem', margin:'5px', color:'red'}} onClick={(e) => this.handleDeleteItem(e, this.props.itemsId, check.id)}>X</button>
                        </InputGroup>
                        </div>
                    )
                })}
                <button style={{margin:'2px'}} onClick={(e) => this.handleAddItems(this.props.itemsId, e)}>Add</button>
                <input type="text" placeholder='Checkitem Name' onChange={(e) => this.onChange(e)} value={this.state.itemName}></input>
            </div>
            
        );
    }
}
 
export default CheckItems;