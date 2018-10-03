import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import GameWrapper from "./components/GameWrapper";
import icons from "./icons.json";
import "./App.css";

class App extends Component {
  // state as icons.json
  state = {
    icons
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  render() {
    return (
      <Wrapper>
        <Navbar>Memory Click</Navbar>
        <Jumbotron />
        <GameWrapper>
          {this.state.icons.map(icons => (
            <GameCard
              removeFriend={this.removeFriend}
              id={icons.id}
              key={icons.id}
              image={icons.image}
            />
          ))}
        </GameWrapper>
      </Wrapper>
    );
  }
}

export default App;