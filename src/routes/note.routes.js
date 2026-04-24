const express = require("express");
const router = express.Router();

const { createNote, createBulkNotes, getAllNotes, getNoteById, replaceNote } = require("../controllers/note.controller");

router.post("/", createNote);
router.post("/bulk", createBulkNotes);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);

module.exports = router;