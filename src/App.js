import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Crusty from "./components/Crusty";
import ScoreBar from "./components/ScoreBar";
import characters from "./characters.json";
import Modal from "./components/Modal"
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters,
      highScore: 0,
      currentScore: 0,
      isOpen: false
    };
  }

  testSelected = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let selectedCharacterId;

    let chars = this.state.characters;
    let highS = this.state.highScore;
    let curS = this.state.currentScore;

    for (let i = 0; i < chars.length; i++) {
      if (chars[i].id === id) {
        selectedCharacterId = i;
        i += chars.length;
      }
    }

    if (!chars[selectedCharacterId].wasSelected) {
      //pick was good.. add to the score and mark character selected
      curS++;
      chars[selectedCharacterId].wasSelected = true;
    }
    else {
      //pick was bad, reset the game
      for (let i = 0; i < chars.length; i++) {
        chars[i].wasSelected = false;
      }
      curS = 0;
    }

    if (curS === 2) {
      this.setState({ isOpen: true })
    }


    if (curS > highS) {
      highS = curS;
    }

    //reorder the array
    for (let i = 0; i < chars.length; i++) {
      chars[i].sortOrder = Math.floor(Math.random() * 100) + 1
    }
    chars.sort(function (a, b) { return a.sortOrder - b.sortOrder })

    this.setState({
      characters: chars,
      highScore: highS,
      currentScore: curS
    });
  };

  toggleModal = () => {
     this.setState({
       isOpen: false
     });
  }

  render() {
    return (
      <div>
        <ScoreBar currentScore={this.state.currentScore} highScore={this.state.highScore} />
        <Crusty />
        <div className="divChars">
          <div className="row">
            {this.state.characters.map(character => (
              <div className="col-md-3 col-pad">
                <CharacterCard
                  testSelected={this.testSelected}
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  image={character.image}
                />
              </div>
            ))}
          </div>
          <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
        </Modal>
        </div>
      </div>
    );
  }
}

export default App;
