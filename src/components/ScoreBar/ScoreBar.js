import React from "react";
import "./ScoreBar.css";

const ScoreBar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
<ul className="nav navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="/"><h1 className="title">Current Score: {props.currentScore} High Score: {props.highScore}</h1></a></li>
        </ul>
    </nav>
  );
  
export default ScoreBar;
