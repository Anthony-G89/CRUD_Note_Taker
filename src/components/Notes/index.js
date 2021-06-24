/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

function Notes() {
    return (

        <div className="noteContainer">
            <Link to="/"><a className="backBtn">Back</a></Link>

            <h1 className="noteTitle">New Note</h1>
            <hr />
            <div className="row">
                <div className="col-12 ">
                    <form>

                        <label for="input_text">Note Title:</label>
                        <input placeholder="Title" id="input_text" type="text" data-length="20" />
                            <br/>
                            <br/>
                        <label for="input_text">Note</label>
                        <textarea placeholder="Your note.." rows="10" cols="50" data-length="120"></textarea>

                    </form>
                </div>

            </div>




        </div>
    )
}

export default Notes;
