/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Notes({ btnToDeleteBtn , editOpenner }) {

    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const [notesList, setNotesList] = useState([]);




    function loadNotes() {
        axios.get("/getNotes").then(res =>
            // console.log(res.data.notes))
            setNotesList(res.data.notes))
    };

    useEffect(() => {
        loadNotes()
    }, []);


    const submitNote = (e) => {
        e.preventDefault();

        if (!noteTitle || !noteBody) {
            alert("Please enter a note");
            return;
        };

        axios.post('/api/insertNotes', {
            Title: noteTitle,
            Body: noteBody,
        });

        setNotesList([
            ...notesList,
            { Title: noteTitle, Body: noteBody }
        ]);

    };

    // Function to delete notes
    const deleteNote = (id) => {
        console.log(id)
        axios.delete(`/api/insertNotes/:${id}`)
            .then(response =>
                alert(response.data)
            )
    }

    return (
        <div className="noteContainer">
            <Link to="/"><a className="backBtn">Back</a></Link>

            <h1 className="noteTitle">New Note</h1>

            <div className="row newNote">
                <div className="col-6 ">
                    <form className="noteFormContainer">
                        <label htmlFor="input_text" className="titleLabel">Title:</label>
                        <input id="input_text"
                            type="text"
                            data-length="20"
                            name="noteTitle"
                            onChange={event => setNoteTitle(event.target.value)}
                        />
                        <br />
                        <br />

                        <label htmlFor="input_text" className="textLabel"> Note Text</label>
                        <textarea id="body_text"
                            className="noteBody"
                            type="text"
                            name="noteBody"
                            onChange={event => setNoteBody(event.target.value)}
                            rows="10"
                            cols="50"
                            data-length="120">
                        </textarea>
                    </form>
                    <button id="submitNoteBtn" type="submit" onClick={submitNote} >Submit</button>
                </div>
            </div>

            <div className="row listOfNotes">
                <div className="col-lg-12">
                    <h1 className="myNotesTitle">My Notes</h1>
                    <ul className=" list-group-flush liContainer">
                        {notesList ?
                            notesList.map(notes => (
                                // console.log(notes)
                                <div key={notes.id} className="card" >
                                    <div onClick={editOpenner} className="userTitle">{notes.Title}</div>
                                    <div className="userBody">{notes.Body}</div>
                                <img className="editBtn" title="Edit" onClick={editOpenner} src={process.env.PUBLIC_URL + "./Images/icons8-edit-30.png"} />
                                    <img className="trashBtn" onClick={() => deleteNote(notes.id)} title="Trash" src={process.env.PUBLIC_URL + "./Images/icons8-remove-30.png"} />
                                </div>
                            ))
                            : <h3>No new notes!!</h3>}

                        {/* <li className="list-group-item">Sports
                            <img className="editBtn" title="Edit" src={process.env.PUBLIC_URL + "./Images/icons8-edit-30.png"} />
                            <img className="trashBtn" onClick={btnToDeleteBtn} title="Trash" src={process.env.PUBLIC_URL + "./Images/icons8-remove-30.png"} />
                        </li>
                        <li className="list-group-item">History</li>
                        <li className="list-group-item">Grocery</li> */}
                    </ul>
                </div>
            </div>


        </div>


    )
}

export default Notes;
