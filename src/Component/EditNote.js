import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


function EditNote(props) {

    const [title, setTitle] = useState(props.note.title);
    const [date, setDate] = useState(props.note.number);
    const [textarea, setTextArea] = useState(props.note.location);
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
  
    const handleTextAreaChange = (e) => {
      setTextArea(e.target.value);
    };
  
    function handleSubmit() {
  
      let editedNote = {
        title: title,
        date: date,
        textarea: textarea,
        id: props.note.id,
      };
  
      props.editNote(editedNote, props.note.id);
      props.toggleModal();
    }

    return (
        <div>
        <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Title</Form.Label>
         <Form.Control
           type="text"
           placeholder="Title"
           value={title}
           onChange={(e) => handleTitleChange(e)}
         />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Date</Form.Label>
         <Form.Control
           name="date"
           placeholder="Enter Number"
           value={date}
           onChange={(e) => handleDateChange(e)}
         />
         </Form.Group>
 
     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Text Area</Form.Label>
         <Form.Control
           name="text"
           placeholder="Text Area"
           value={textarea}
           onChange={(e) => handleTextAreaChange(e)}
         />
 
         <Button onClick={() => handleSubmit()}>Save</Button>
       </Form.Group>
     </Form>
   </div>
    )
}

export default EditNote
