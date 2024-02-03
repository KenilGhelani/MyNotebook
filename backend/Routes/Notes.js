const express = require("express");
var fetchuser = require("../Middleware/fetchuser");
const Note = require("../Models/Notes");
const { body, validationResult } = require("express-validator");
const router = express.Router();

//Route 1: Get All the Notes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//Route 2: Add notes...
router.post(
  "/addnote",
  fetchuser,
  [
    body("description", "Description must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { title, description, tag } = req.body;
    try {
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.send(savedNote);
    } catch (error) {
      res.json({ error: error.message });
    }
  }
);

//Route 3 : Update notes
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  try {
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("notes not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(404).send("Not allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//Route 4 : Delete notes
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //Find the note to be delete and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("notes not found");
    }

    //Allow deletion only if user owes that note
    if (note.user.toString() !== req.user.id) {
      return res.status(404).send("Not allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ note: note });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
