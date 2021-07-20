const express = require("express");
const router = express.Router();
// const path = require("path");
const Note = require("../model/note.js");

// Get ALL Notes
router.get("/getNotes", (req, res) => {
    Note.all(function (data) {
        // console.log(data);
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
        res.json({ id: result.insertId });
    })
});


// Delete Note
router.delete("/api/insertNotes/:id", function (req, res) {
    // console.log(req.params.id);
    // res.send("RESPONDING FROM THE BACK")
    // var condition =  req.params.id;

    Note.delete( req.params.id, function (result) {
       console.log(result);

       res.send("NOTE DELETED")
    })

});


module.exports = router;