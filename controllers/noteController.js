const express = require("express");
const router = express.Router();
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
});



// Update Note
router.put("/api/insertNotes/:id", function (req, res) {
    const condition = { id: req.params.id };
    const { Title, Body } = req.body;
    console.log({ Title, Body });

    Note.update({ Title, Body }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).json({
                id: parseInt(req.params.id),
                Title,
                Body
            });
        }
    })
});


module.exports = router;