import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (

  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">{ props.children }</h1>
      <p class="lead">So many languages so little time... Click on the logos to "learn" the coding languages, but 
        don't click the same one twice! The goal is trying not to forget what you've "learned"!
      </p>
    </div>
  </div>

);

export default Jumbotron;