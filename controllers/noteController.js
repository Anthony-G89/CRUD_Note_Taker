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
        console.log(result);
        res.json({ message: "Your Note has been posted", id: result.insertId });
    })
});


// Delete Note
router.delete("/api/insertNotes/:id", function (req, res) {
    console.log(req.params);
    const condition = { id: req.params.id };
    Note.delete(condition, function (results) {
        if (results.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

    // res.send("RESPONDING FROM THE BACK. Your note should be deleted")
    // console.log(req.params.id);
    // var condition =  req.params.id;

    // Note.delete( req.params.id, function (result) {
    //    console.log(result);

    //    res.json({message: "Your Note has been deleted"});
    // })

});



// Update Note
router.put("/api/insertNotes/:id", function (req, res) {

    res.send("RESPONDING FROM THE BACK END UPDATE ROUTE")

});


module.exports = router;