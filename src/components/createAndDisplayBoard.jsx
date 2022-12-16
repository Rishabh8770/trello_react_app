import React from "react";
import * as trelloApi from "../Api";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ListOnBoard from "./listOnBoard";

class CreateBoard extends React.Component {
  state = {
    boardList: [],
    boardName: "",
  };

  componentDidMount() {
    trelloApi.getBoards().then((boards) => {
      this.setState({
        boardList: boards.data,
      });
    });
  }

  handleSubmit = async (e) => {
     e.preventDefault();
    const createNewBoard = await trelloApi.createBoard(this.state.boardName);
    if(this.state.boardName.length === 0){
      alert("please enter text")
    }else{
      this.setState({
        boardName: "",
        boardList: [...this.state.boardList, createNewBoard.data],
      });
    }
    
  };

  handleDelete = async (val) => {
    await trelloApi.deleteBoards(val);

    let newList = this.state.boardList.filter((element) => {
      return element.id !== val;
    });

    this.setState({
      boardList: newList,
    });
  };
  /* 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.boardList !== this.state.boardList) {
      trelloApi.getBoards().then((boards) => {
        this.setState({
          boardList: boards.data,
        });
      });
    }
  } */

  render() {
    return (
      <div>
        <div
          style={{
            margin: "1rem",
            border: "1px solid black",
            borderRadius: "10px",
            width: "15rem",
            backgroundColor: "#080808",
            padding: "10px",
          }}
        >
          <h6 style={{ color: "white" }}>Create a new board</h6>
          <form>
            <input
              onChange={(e) => {
                this.setState({ boardName: e.target.value });
              }}
              value={this.state.boardName}
              style={{ width: "10rem", margin: "10px" }}
              placeholder="Enter a Name..."
              type="text"
            ></input>
            <Button
              type="button"
              variant="primary"
              onClick={(e) => {
                this.handleSubmit(e);
              }}
            >
              Submit
            </Button>
          </form>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.boardList.length === 0
            ? ""
            : this.state.boardList.map((element) => {
                return (
                  <div
                    style={{
                      padding: "10px",
                      margin: "1.5rem",
                      border: "1px solid black",
                      borderRadius: "10px",
                      marginTop: "3rem",
                      width: "15rem",
                      height: "10rem",
                      backgroundColor: "#004040",
                      color: "white",
                    }}
                    key={element.id}
                  >
                    <img
                      width="100%"
                      height="80%"
                      src="https://placeimg.com/200/100/nature"
                      alt=""
                    />
                    <h6 style={{ margin: "0.5rem" }}>{element.name}</h6>
                    <div
                      style={{
                        padding: "5px",
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <Link to={`/${element.id}`}>
                        <Button variant="primary" type="button">
                          View
                        </Button>
                      </Link>
                      <Button
                        onClick={(e) => {
                          this.handleDelete(element.id);
                        }}
                        variant="danger"
                      >
                        Delete
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

export default CreateBoard;
