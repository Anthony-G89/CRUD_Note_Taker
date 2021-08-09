import React , {useState} from "react";
import "./style.css";

function Edit({ openEditModal, closeEditModal, editNotesHandler }) {
    console.log(editNotesHandler);

    const [newTitle , setNewTitle] = useState("");
    const [newBody , setNewBody] = useState("");

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
                                        value={editNotesHandler.Title}
                                        onChange={ event => setNewTitle(event.target.value)}

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
                                        value={editNotesHandler.Body}
                                         onChange={ event => setNewBody(event.target.value)}
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
