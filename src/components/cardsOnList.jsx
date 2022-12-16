import React, { Component } from "react";
import { Button } from "react-bootstrap";
import * as trelloApi from "../Api";
import CheckList from "./checklist";

class CardOnList extends React.Component {
  state = {
    cards: [],
    cardName: "",
  };

  componentDidMount() {
    trelloApi.getCards(this.props.listId).then((card) => {
      this.setState({
        cards: card.data,
      });
    });
  }

  handleAddCard = (e,val) => {
    e.preventDefault();
    if(this.state.cardName.length === 0 || this.state.cardName.length === null){
        alert('please enter text')
    }else{
        trelloApi.createCard(this.state.cardName, val).then((res) => {
            this.setState({ 
                cardName: "",
                cards:[...this.state.cards, res.data],
            })
        })
    }
  }

  handleChange = (e) => {
    this.setState({
        cardName: e.target.value
    })
  }
  
  handleDelete = async (val) => {
    await trelloApi.deleteCard(val)
    let newCards = this.state.cards.filter((card) => {
        return card.id !== val
    })
    this.setState({
        cards: newCards,
    })
  } 


  render() {
    return (
      <div>
        {this.state.cards.length === 0
          ? ""
          : this.state.cards.map((card) => {
              return (
                <div key={card.id}>
                <p style={{ color: "black",width:'13.5rem', height:'5rem', border:'1px solid black', margin:"2px", display:'flex', justifyContent:'center' }}>{card.name}</p>
                <Button style={{margin:'3px'}} variant='danger' onClick={(e) => this.handleDelete(card.id)}>Remove</Button>
                   
                    <CheckList checkListId={card.id}/>
                              
                </div>
              );
              
                
            })}
            <div style={{display:'flex', alignItems:'center', padding:"2px", marginTop:"2rem"}}>
            <form>
            <Button variant="primary" style={{margin:'5px'}} onClick={(e) => this.handleAddCard(e, this.props.listId)}>Add Card</Button>
            <input type="text" placeholder="Card Name" style={{width:'6rem'}} onChange={(e) => this.handleChange(e)} value={this.state.cardName}></input>
            </form>
            </div>
            </div>
    );
  }
}

export default CardOnList;
