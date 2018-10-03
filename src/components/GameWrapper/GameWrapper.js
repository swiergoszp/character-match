import React from "react";
import "./GameWrapper.css";

const GameWrapper = props => (
  <div className="container gameWrapper">
    <div className="row">
      { props.children }
    </div>
  </div>
);

export default GameWrapper;