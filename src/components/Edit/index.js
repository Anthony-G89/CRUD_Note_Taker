import React from "react";
// import Note from "../../../model/note";
import "./style.css";

function Edit({ openEditModal, closeEditModal , addNotesHandler }) {
    return (
        <div>

            {openEditModal ? <div className="editWrapper">
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
                                        >
                
                                    
                                    </textarea>
                                </form>
                            </div>
                            <div className="buttonContainer">
                                <button id="updateBtn">Update</button>
                                <button onClick={closeEditModal} id="editCancelBtn">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                : null}


        </div>
    )
}



export default Edit;
