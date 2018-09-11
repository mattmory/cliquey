import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CharacterCard from "./components/CharacterCard";
import Crusty from "./components/Crusty";
import ScoreBar from "./components/ScoreBar";
import characters from "./characters.json";


import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters,
      highScore: 0,
      currentScore: 0,
      shakeDiv: false,
      modal: false
    };
  }

  testSelected = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let shakeBool = false;
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
      //pick was bad, reset the game and shake the div
      for (let i = 0; i < chars.length; i++) {
        chars[i].wasSelected = false;

      }
      shakeBool = true;
      curS = 0;
    }

    //Check to see if the game has been won, reset the game and display a modal
    if(curS === 12)
    {
      curS = 0;
      highS = 0;
      for (let i = 0; i < chars.length; i++) {
        chars[i].wasSelected = false;
      }
      this.setState({modal: true})
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
      currentScore: curS,
      shakeDiv: shakeBool
    });
  };


  closeModal = () => {
    this.setState({
      modal: false
    });
  }


  render() {
    return (
      <div>
        <ScoreBar currentScore={this.state.currentScore} highScore={this.state.highScore} />
        <Crusty />
        <div className={this.state.shakeDiv ? "divChars incorrect" : "divChars"}>
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
        </div>
        <Modal isOpen={this.state.modal}>
          <ModalBody><img src="./Images/krusty-win-angry.png" alt="Krusty Says"/><br/>
            <span className="modalText">You win kid. Here's an expired coupon for a Krustyburger.</span>
            <button onClick={this.closeModal} class="button float-right">Ok</button>
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default App;
