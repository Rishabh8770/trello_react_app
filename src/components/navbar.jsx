import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { Component } from "react";

class Navbaar extends Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: "#026AA7" }} expand="lg">
        <Container>
          <img
            style={{ width: "7%", padding: "1rem" }}
            src="https://seeklogo.com/images/T/trello-logo-45ABCC6452-seeklogo.com.png"
            alt=""
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#home" style={{ color: "white" }}>
                Workspace
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" style={{ color: "white" }}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navbaar;
