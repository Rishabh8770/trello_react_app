import React, { Component } from "react";
import { useParams } from "react-router-dom";
import * as trelloApi from "../Api";
import { Button } from "react-bootstrap";
import CardOnList from "./cardsOnList";

class ListOnBoard extends React.Component {
  state = {
    lists: [],
    listName: "",
  };

  id = window.location.href.split("/")[3];
  componentDidMount() {
    trelloApi.getLists(this.id).then((list) => {
      this.setState({
        lists: list.data,
      });
    });
  }

  handleAdd = async (e) => {
    e.preventDefault();
      const createList = await trelloApi.addList(this.id, this.state.listName);
      this.setState({
        listName: "",
        lists: [...this.state.lists, createList.data],
      });
    };
  

  handleArchiveList = async (val) => {
    await trelloApi.deleteList(val);
    let newLists = this.state.lists.filter((element) => {
      return element.id !== val;
    });
    this.setState({
      lists: newLists,
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              margin: "1rem",
              border: "1px solid black",
              borderRadius: "10px",
              width: "15rem",
              padding: "10px",
            }}
          >
            <h6 style={{ color: "black" }}>Add New List</h6>
            <form>
              <input
                onChange={(e) => {
                  this.setState({ listName: e.target.value });
                }}
                value={this.state.listName}
                style={{ width: "10rem", margin: "10px" }}
                placeholder="Enter list Name..."
                type="text"
              ></input>
              <Button
                type="button"
                variant="primary"
                onClick={(e) => this.handleAdd(e)}
              >
                Add
              </Button>
            </form>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {this.state.lists.length === 0
            ? ""
            : this.state.lists.map((element) => {
                return (
                  <div
                    key={element.id}
                    style={{
                      padding: "10px",
                      margin: "1.5rem",
                      border: "1px solid blue",
                      borderRadius: "10px",
                      marginTop: "3rem",
                      width: "15rem",
                      height: "auto",
                      color: "blue",
                    }}
                    
                  >
                    <h5 style={{ textDecorationLine: "underline" }}>
                      {element.name}
                    </h5>
                    <CardOnList listId={element.id} />
                    <div>
                      <Button
                        variant="danger"
                        onClick={(e) => this.handleArchiveList(element.id)}
                      >
                        Archive List
                      </Button>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}

export default ListOnBoard;
