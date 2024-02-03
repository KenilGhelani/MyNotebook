import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContexts";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNotes } = context;
 
  const { note, updateNote } = props;
  return (
    <div>
      <div className="card my-3" style={{backgroundColor: "#b9b2b2"}}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title my-1"><strong>{note.title}</strong></h5>
            <i
              className="fa-solid fa-trash mx-2 my-2"
              onClick={() => {
                deleteNotes(note._id);
                props.showAlert("Deleted Successfully", "success");
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square mx-2 my-2"
              onClick={() => {
                updateNote(note);
                
              }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
