import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react'
import Main from './Component/Main';
import NoteForm from './Component/NoteForm';
import NoteList from './Component/NoteList';


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes([...notes, note])
  }

  function deleteNote(noteId) {
    const filteredNotes = notes.filter((note)=> {
      return noteId !== note.id;
    })

    setNotes(filteredNotes);
  }

  return (
   <>
  <Main />
  <NoteForm addNote={addNote} />
  <NoteList notes={notes} deleteNote={deleteNote} />
   </>
  );
}

export default App;
