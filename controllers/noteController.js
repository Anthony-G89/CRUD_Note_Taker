const express = require("express");
const router = express.Router();
// const path = require("path");
const Note = require("../model/note.js");

// Get ALL Notes
router.get("/", (req, res) => {
    Note.all(function (data) {
        const object = {
            notes: data
        };
        return res.json(object)
    })

});


// POST NOTE
router.post("/api/insertNotes", function (req, res) {
    Note.create([
        "Title", "Body"
    ], [
        req.body.Title, req.body.Body
    ], function (result) {
        return res.json({ id: result.id })
    })
});

module.exports = router;