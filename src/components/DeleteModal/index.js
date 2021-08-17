import React from 'react';
import "./style.css";

const DeleteModal = () => {

    


    return (
        <div>

            <div className="modal-wrapper">
                <div className="modal-box">
                    <div className="modal-header">
                        <h2 className="modal-Title">Deleting Note</h2>
                        <span className="closeBtn">&times;</span>
                    </div>
                    <div className="modal-content">
                        <p className="modal-text">Are you sure you want to delete note.</p>
                    </div>
                    <div className="modal-footer">
                        <button  className="cancelBtn">Cancel</button>
                        <button className="deleteBtn">Delete</button>
                    </div>
                </div>
            </div>
               

        </div>
    )
}

export default DeleteModal;
