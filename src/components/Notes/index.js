/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import EditModal from '../Edit';



function Notes() {

    // show Delete Modal
    // const [showModal, setShowModal] = useState(false);

    // Show Edit Modal
    const [showEditModal, setShowEditModal] = useState(false);

    // Array to hold title and note body
    const [editingNote, setEditingNote] = useState({});

    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const [notesList, setNotesList] = useState([]);



    // Receiving array from Note/index.js and also openning edit modal
    
    const editModalOpener = (note) => {
        // console.log(note)
        setEditingNote(note)
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false)
    };

    // Close Delete Modal BUT NOT USING AT THE MOMENT
    //   const closeModal = () => {
    //     setShowModal(false)
    //   };

    // This function will open a Modal for when user wants to delete a note BUT NOT USING AT THE MOMENT
    // const btnToDeleteBtn = () => {
    //     setShowModal(true);
    // };


    // RETRIEVE NOTES METHOD
    function loadNotes() {
        axios.get("/getNotes").then(res =>
            setNotesList(res.data.notes))
    };

    useEffect(() => {
        loadNotes()
    }, []);

    // SUBMIT NOTE METHOD
    const submitNote = (e) => {
        e.preventDefault();
        if (!noteTitle || !noteBody) {
            alert("Please enter a note");
            return;
        };
        axios.post('/api/insertNotes', {
            Title: noteTitle,
            Body: noteBody,
        }).then((response) => {
            const noteId = response.data.id;
            setNotesList([
                ...notesList,
                { Title: noteTitle, Body: noteBody, id: noteId }
            ]);
            window.location.reload();
        });
    };

    // DELETE NOTE METHOD
    const deleteNote = (id) => {
        console.log(id)

        axios.delete(`/api/insertNotes/${id}`)
            .then(response => {
                const newNoteList = notesList.filter(note => note.id !== id);
                setNotesList(newNoteList);
            });
    };


    //  Update Method
    const handleNoteUpdated = (updatedNote) => {
        // console.log(updatedNote);
        const newNotesList = notesList.map((note) => {
            if (note.id === updatedNote.id) {
                return updatedNote
            }
            return note
        });
        setNotesList(newNotesList)
        closeEditModal()
        window.location.reload();
    };

    return (
        <div className="noteContainer">
            <Link to="/"><a className="backBtn">Back</a></Link>

            <h1 className="noteTitle">New Note</h1>

            <div className="row newNote">
                <div className="col-6 ">
                    <form className="noteFormContainer">
                        <label htmlFor="input_text" className="titleLabel">Title</label>
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
                    <h1 className="myNotesTitle">All Notes</h1>
                    <ul className=" list-group-flush liContainer">
                        {notesList.length ?
                            notesList.map(note => (
                                <div key={note.id} className="card" >
                                    <div className="userTitle">{note.Title}</div>
                                    <div className="userBody">{note.Body}</div>
                                    <img className="editBtn" title="Edit" onClick={() => editModalOpener(note)} src={process.env.PUBLIC_URL + "./Images/icons8-edit-30.png"} />
                                    <img className="trashBtn" onClick={() => deleteNote(note.id)} title="Trash" src={process.env.PUBLIC_URL + "./Images/icons8-remove-30.png"} />
                                </div>
                            ))
                            : <h3>No new notes!!</h3>
                        }
                    </ul>
                </div>
            </div>
            {
                showEditModal &&
                <EditModal
                    closeEditModal={closeEditModal}
                    note={editingNote}
                    handleNoteUpdated={handleNoteUpdated}
                />
            }


        </div>




    )
}

export default Notes;
