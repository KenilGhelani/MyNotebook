import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContexts";

const AddNotes = (props) => {
  const context = useContext(NoteContext);
  const { addNotes } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const onChange = (e) => {
    //...note is a spread operator used to create copy of the existing note object
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNotes(note.title, note.description, note.tag);
    props.showAlert('Added Successfully', 'success');
    setNote({ title: "", description: "", tag: "" });
  };

  return (
    <div>
      <div className="my-3 py-4 px-2 rounded-4 mx-auto" style={{ maxWidth: "500px", maxHeight: "auto", backgroundColor: "#b9b2b2" }}>
        <h2 className="mt-2 pb-2 text-center"><strong>Add Your Notes</strong></h2>
        <hr />
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label my-2">
              <h5>Title</h5>
            </label>
            <input
              type="title"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label my-2">
              <h5>Description</h5>
            </label>
            <input
              type="Description"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="tag" className="form-label my-2">
              <h5>Tag</h5>
            </label>
            <input
              type="tag"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="text-center py-3">

          <button
            disabled={note.description.length < 5 ||
              note.tag.length < 5
            }
            type="submit"
            className="btn btn-dark"
            onClick={handleClick}
          >
            Add Note
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
