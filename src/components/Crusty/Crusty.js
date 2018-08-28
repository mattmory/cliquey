import React from "react";
import "./Crusty.css";

const Crusty = props => (
    <div className="crusty">
    <div className="row">
        <div className="col-md-6">
        <img src="./Images/Crusty.jpg" alt="Crusty"/>
        </div>
        <div className="col-md-6 instructions">
        <span className="instText">Hey Hey kids!!! Pick each character once.. get to 12 and win a prize!</span>
        </div>
        </div>
    </div>
  );
  
export default Crusty;
