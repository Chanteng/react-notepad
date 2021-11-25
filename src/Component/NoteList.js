import React from 'react'
import Note from './Note'
import {connect} from 'react-redux'

function NoteList(props) {
    return (
        
        <div>
            {props.notes.map((note)=>{
                return (
                    <Note
                    note={note}
                    key={note.id}
                    />
                )
            })}
            
        </div>
    )
}

const mapState = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapState)( NoteList)
