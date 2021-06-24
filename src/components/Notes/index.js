/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

function Notes() {
    return (


        <div className="noteContainer">
            <Link to="/"><a className="backBtn">Back</a></Link>

            <h1 className="noteTitle">New Note</h1>

            <div className="row newNote">
                <div className="col-6 ">
                    <form className="noteFormContainer">
                        <label htmlFor="input_text" className="titleLabel">Title:</label>
                        <input id="input_text" type="text" data-length="20" />
                        <br />
                        <br />
                        <label htmlFor="input_text" className="textLabel"> Note Text</label>
                        <textarea id="body_text" className="noteBody"  type="text" rows="10" cols="50" data-length="120"></textarea>
                    </form>
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
