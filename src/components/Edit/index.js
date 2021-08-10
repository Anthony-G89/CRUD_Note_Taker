import React, { useState } from "react";
import "./style.css";
import axios from "axios";

function Edit({ openEditModal, closeEditModal, transferingTitleAndBody }) {
    // console.log(editNotesHandler);
    const { Title = "", Body = "" } = transferingTitleAndBody;
    const [newTitle, setNewTitle] = useState(Title);
    const [newBody, setNewBody] = useState(Body);
    const [holdingNotes, setHoldingNotes] = useState({});



    // UPDATE NOTE
    const updateNote = (id) => {
        console.log(id)
        axios.put(`/api/insertNotes/${id}`)
            .then(response => {
                const updatedNote = holdingNotes.filter(newNote => newNote.id === id)
                setHoldingNotes(updatedNote)
            });
    };


    return (
        <div>

            <div className="editWrapper">
                <div className="editModal">
                    <div className="editModalHeader">
                        <h1 className="editNoteTitle">Edit Note</h1>
                        <span onClick={closeEditModal} className="EditcloseBtn">&times;</span>
                    </div>
                    <div className="editContent">
                        <div className="row EditNote">
                            <div className="col-6 ">
                                <form className="noteFormContainer">
                                    <label htmlFor="input_text" className="titleLabel">Title:</label>
                                    <input id="input_text"
                                        type="text"
                                        data-length="20"
                                        name="noteTitle"
                                        value={newTitle}
                                        onChange={event => setNewTitle(event.target.value)}
                                    />

                                    <br />
                                    <br />

                                    <label htmlFor="input_text" className="textLabel"> Note Text</label>
                                    <textarea id="body_text"
                                        className="noteBody"
                                        type="text"
                                        name="noteBody"
                                        rows="10"
                                        cols="50"
                                        data-length="120"
                                        value={newBody}
                                        onChange={event => setNewBody(event.target.value)}
                                    >
                                    </textarea>
                                </form>
                            </div>
                            <div className="buttonContainer">
                                <button id="updateBtn" onClick={() => updateNote(transferingTitleAndBody.id)}>Update</button>
                                <button onClick={closeEditModal} id="editCancelBtn">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}



export default Edit;
