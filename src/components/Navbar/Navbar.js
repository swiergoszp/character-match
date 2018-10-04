import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div className="navbar fixed-top justify-content-around text-center">

      <div className="col-md-4">
        <a href="/" className="title">{ props.children }</a>
      </div>

      <div className="guessResult col-md-4">
        { props.message }
      </div>

      <div className="score col-md-4">Score: { props.score } | High Score: { props.highScore }</div>

  </div>
);

export default Navbar;