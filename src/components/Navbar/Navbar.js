import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div className="row navbar fixed-top d-flex justify-content-around">

      <div>
        <a href="/" className="title">{props.children}</a>
      </div>

      <div className="guessResult">Correct</div>

      <div className="score">Score</div>

  </div>
);

export default Navbar;