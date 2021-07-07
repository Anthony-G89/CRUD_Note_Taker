import React from 'react';
import "./style.css";

const DeleteModal = ({ openModal }) => {

 
    return (
        <div>
            {openModal ? <div className="modal-wrapper">
                <div className="modal-background">
                    <div className="modal-box">
                        <div className="modal-content">
                            <p>Are you sure want to delete note.</p>
                        </div>
                        <div className="modal-footer">
                            <button>Cancel</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div> : null}
        </div>
    )
}

export default DeleteModal;
