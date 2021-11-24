import React, {useState} from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";


function Main(props) {
 

  return (
    <div>
      <Container>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Notepad</Navbar.Brand>
          </Container>
        </Navbar>
        <br />

     
        
      </Container>
    </div>
  );
}

export default Main;
