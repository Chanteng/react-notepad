import React, { useState } from "react";
import { Button, Modal, Container } from "react-bootstrap";


function Note(props) {
  const note = props.note;

  //state to handle modal
 const [showModal, setShowModal] = useState(false);

  //function to toggle modal
function toggleModal() {

    setShowModal(!showModal);
  }

  return (
    <div>
      <Container>
      <h1>Title: {note.title}</h1>
      <h3>Date: {note.date}</h3>
      <h3>Text Area: {note.textarea}</h3>
      <Button variant="danger" onclick={()=>props.deleteNote(note.id)}>
        Delete
      </Button>
</Container>
    </div>
  );
}

export default Note;