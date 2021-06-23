/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./style.css";
// import NotePad from "../../../public/Images/NotePad-Icon.png";

const landingPage = () => {
    return (
        <div className="container">
            <div className="addNoteBtnContainer">
                 <a className="addNoteBtn">Add a note <img className="notePadIcon" src={process.env.PUBLIC_URL + "./Images/NotePad-Icon.png"} /> </a>
            </div>
        </div>
    )
}

export default landingPage;
