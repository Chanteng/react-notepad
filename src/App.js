import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react'
import Main from './Component/Main';
import NoteForm from './Component/NoteForm';
import NoteList from './Component/NoteList';


function App() {

  return (
   <>
  <Main />
  <NoteForm  />
  <NoteList />
   </>
  );
}

export default App;
