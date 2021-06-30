/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import Axios from "axios";

function Notes() {


    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");


    const submitNote = (e) => {
        e.preventDefault();
        Axios.post("/api/notes", {
            notetitle: noteTitle,
            noteBody: noteBody
        }).then((err) => {
            if (err) throw err;
            alert("Your note has been posted! 😃")
        })
    };


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
                            onChange={event => setNoteTitle(event.target.value) + console.log(event.target.value)} />
                        <br />
                        <br />
                        <label htmlFor="input_text" className="textLabel"> Note Text</label>
                        <textarea id="body_text"
                            className="noteBody"
                            type="text"
                            name="noteBody"
                            onChange={event => setNoteBody(event.target.value) + console.log(event.target.value)}
                            rows="10"
                            cols="50"
                            data-length="120">
                        </textarea>
                    </form>
                    <button id="submitNoteBtn" onClick={submitNote} >Submit</button>
                </div>
            </div>

            <div className="row listOfNotes">
                <div className="col-lg-12">
                    <h1 className="myNotesTitle">My Notes</h1>
                    <ul className=" list-group-flush liContainer">
                        <li className="list-group-item">Sports</li>
                        <li className="list-group-item">History</li>
                        <li className="list-group-item">Grocery</li>
                        <li></li>
                    </ul>
                </div>
            </div>


        </div>


    )
}

export default Notes;
