import React from 'react'
import Note from './Note'

function NoteList(props) {
    return (
        
        <div>
            {props.notes.map((note)=>{
                console.log(note.id);
                return (
                    <Note
                    note={note}
                    key={note.id}
                    deleteNote={props.deleteNote}
                    editNote={props.editNote}
                    />
                )
            })}
            
        </div>
    )
}

export default NoteList
