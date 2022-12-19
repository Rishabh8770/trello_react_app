import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as trelloApi from "../Api";
import CheckItems from "./checkItems";

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      checklist: [],
      checklistName: "",
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    trelloApi.getChecklist(this.props.checkListId).then((res) => {
      this.setState({
        checklist: res.data,
      });
    });
  }

  handleAddChecklist = (val, e) => {
    if(this.state.checklistName.length === 0 || this.state.checklistName.length === null){
        alert("please enter text")
    }else{
        trelloApi.createChecklist(val, this.state.checklistName).then((res) => {
            this.setState({
                checklistName:"",
                checklist: [...this.state.checklist, res.data]
            })
        })
    }
  }

  handleChange = (e) => {
    this.setState({
        checklistName: e.target.value
    })
  }

  handleDeleteChecklist = async (val) => {
    await trelloApi.deleteChecklist(val)
    let newChecklist = this.state.checklist.filter((element) => {
        return element.id !== val
    })
    this.setState({
        checklist: newChecklist,
    }) 
  }

 

  render() {
    return (
      <>
        <Button variant="success" onClick={this.showModal}>
          Checklist
        </Button>

        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create Checklist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <Button variant="success" style={{margin:'1rem'}} onClick={(e) => this.handleAddChecklist(this.props.checkListId, e)}>Add</Button>
              <input type="text" placeholder="Enter Text" onChange={(e) => this.handleChange(e)} value={this.state.checklistName}></input>
            </form>
            {this.state.checklist.map((element) => {
              return (
                <div style={{widhth:'auto', border:'1px solid blue', display:'flex', flexDirection:'column', margin:"5px"}} key={element.id}>
                <p style={{margin:'2px', textDecorationLine: "underline"}}>{element.name}</p>
                    <CheckItems itemsId={element.id} cardId={this.props.checkListId}/>
                  <Button variant="danger" style={{width:'5rem', margin:'2px'}} onClick={(e) => this.handleDeleteChecklist(element.id)}>Delete</Button>
                  
                </div>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.hideModal}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CheckList;
