import React, { useState } from "react";
import NoteContext from "./NoteContexts";

const NoteState = (props) => {
  const host = "https://mynotebook-backend.vercel.app";
  const noteInitial = [];
  const [notes, setNotes] = useState(noteInitial);

  //Get all notes
  const getnotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('Token'),
      }
    });
    const json = await response.json();
    setNotes(json);
  }

  //Add notes
  const addNotes = async (title, description, tag) => {

    //Logic to add note in server side...
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('Token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    //Logic to add note in client side...
    const note = await response.json();
    setNotes(notes.concat(note))
   
  };

  //Delete notes
  const deleteNotes = async (id) => {
    
    //Logic to delete note in server side...
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('Token'),
      }
    });
    const json = response.json();

    //Logic to delete note in client side...
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
   
  };

  //Edit notes
  const editNotes = async (id, title, description, tag) => {
    //Logic to edit in server side...
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('Token'),
      },
      body:  JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    //Logic to edit in client side...
    const  newNote = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      if (newNote[index]._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        // break;
      }
      setNotes(newNote);
     
  };

  }
  return (
    <NoteContext.Provider value={{ notes, addNotes, deleteNotes, editNotes , getnotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
