export const addNote = (newNote) => {

    return {
        type: "ADD_NOTE",
        payload: newNote
    };
};


export const deleteNote = (noteId) => {
    return {
        type: "DELETE_NOTE",
        payload: noteId
    }
};


export const editNote = (noteId, updatedNotes) => {
    return {
        type: "EDIT_NOTE", 
        payload: {noteId, updatedNotes}
    }
}