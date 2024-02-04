import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContexts";
import NoteItem from "./NoteItem";
import AddNotes from "./AddNotes";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(NoteContext);
  const { notes, getnotes, editNotes } = context;

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      getnotes();
    } else {
      navigate("/login");
    }
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const onChange = (e) => {
    //...note is a spread operator used to create copy of the existing note object
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editNotes(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("Updated Successfully", "success");
    refClose.current.click();
  };

  return (
    <div className="container" style={{ maxWidth: "auto"}}>
      <div className="">
        <AddNotes showAlert={props.showAlert} />
      </div>

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#b9b2b2" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <h3>
                  <strong>Edit Notes</strong>
                </h3>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    <h5>Title</h5>
                  </label>
                  <input
                    type="title"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={note.etitle}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    <h5>Description</h5>
                  </label>
                  <input
                    type="Description"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    minLength={5}
                    value={note.edescription}
                    required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="tag" className="form-label">
                    <h5>Tag</h5>
                  </label>
                  <input
                    type="tag"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    value={note.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 ||
                  note.edescription.length < 5 ||
                  note.etag.length < 5
                }
                type="button"
                className="btn btn-dark"
                onClick={handleClick}
              >
                Update Notes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <h2
          className="mb-3  text-decoration-underline text-center"
          style={{ maxWidth: "auto", maxHeight: "auto", color: "black" }}
        >
          <strong>Your Notes</strong>
        </h2>
        <div className="container text-center">
          {notes.length === 0 && <h5>No notes to display</h5>}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem
              updateNote={updateNote}
              note={note}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
