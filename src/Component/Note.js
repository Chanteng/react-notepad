import React, { useState } from "react";
import { Button, Modal, Container } from "react-bootstrap";
import EditNote from "./EditNote"

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
      <Button variant="primary" onClick={() => toggleModal()}>
        Edit
      </Button>
      <Button variant="danger" onclick={()=>props.deleteNote(note.id)}>
        Delete
      </Button>

      

      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Please Edit Here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <EditNote
            note={note}
            editNote={props.editNote}
            toggleModal={toggleModal}
          />
        </Modal.Body>

      </Modal>
</Container>
    </div>
  );
}

export default Note;