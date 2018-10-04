import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import GameWrapper from "./components/GameWrapper";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import icons from "./icons.json";

class App extends Component {
  // state as icons.json
  state = {
    icons,
    score: 0,
    highScore: 0,
    message: "Click a Logo to Begin!"
  };

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
        console.log(this.state.highScore);
      });
    }
    this.state.icons.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${ this.state.score }`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.icons.find((icon, i) => {
      if (icon.id === id) {
        if(icons[i].count === 0){
          icons[i].count = icons[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.icons.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          return this.gameOver();
        }
      }
      return console.log("hi");
    });
  }

  render() {
    return (
      <Wrapper>
        <Navbar message={ this.state.message } score={ this.state.score } highScore={ this.state.highScore }>Bootcamp Experience</Navbar>
        <Jumbotron>The Mini Coding Bootcamp Experience</Jumbotron>
        <GameWrapper>
          {this.state.icons.map(icons => (
            <GameCard
              id={ icons.id }
              key={ icons.id }
              image={ icons.image }
              clickCount={ this.clickCount }
            />
          ))}
        </GameWrapper>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;