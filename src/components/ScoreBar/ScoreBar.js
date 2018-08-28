import React from "react";
//import "./Title.css";

const ScoreBar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a className="navbar-brand" href="/">
      <h1 className="title">Current Score:{props.currentScore} High Score: {props.highScore}</h1>
      </a>
    </nav>
  );
  
export default ScoreBar;
