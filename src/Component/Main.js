import React, {useState} from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";

function Main(props) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    if(title) {
      let newTitle = {
        title: title,
        // id: uuid()
        
      };

      props.addNewTitle(newTitle);

      setTitle("");
    }

  

  }

  

  return (
    <div>
      <Container>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Notepad</Navbar.Brand>
          </Container>
        </Navbar>
        <br />

        <Container>
          <div className="box">
            <Form onSumbit={(e)=>handleSubmit(e)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="Title" name="title" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Date:</Form.Label>
                <Form.Control type="date" placeholder="Date" name="date" />

                <Form.Label>Note Text</Form.Label>
                <Form.Control as="textarea" rows={3} name="textarea" />
              </Form.Group>
              <Button type="submit">Add Note</Button>
            </Form>
          </div>
        </Container>
        
      </Container>
    </div>
  );
}

export default Main;
