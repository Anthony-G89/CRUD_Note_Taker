/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

function Notes() {
    return (
        <div>
            <h1>This is the NOTE PAGE</h1>
            <Link to="/"><a className="homeBtn">Home Page</a></Link>
        </div>
    )
}

export default Notes;
