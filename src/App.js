import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
//import Wrapper from "./components/Wrapper";
import ScoreBar from "./components/ScoreBar";
import characters from "./characters.json";
import "./App.css";

class App extends Component {


  state = {
    characters,
    highScore: 0,
    currentScore: 0
  };

  testSelected = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let selectedCharacterId;

    let chars = this.state.characters;
    let highS = this.state.highScore;
    let curS = this.state.currentScore;

    for(let i=0;i<chars.length;i++)
    {
      if(chars[i].id === id)
      {
        selectedCharacterId = i;
        i+=chars.length;
      }
    }

    if (!chars[selectedCharacterId].wasSelected) {
      curS++;
      chars[selectedCharacterId].wasSelected = true;
    }
    else{
      curS=0;
    }


    if(curS>highS)
    {
      highS = curS;
    }
    console.log(chars)
    //reorder the array
    for(let i=0;i<chars.length;i++)
    {
      chars[i].sortOrder= Math.floor(Math.random() * 100) + 1 
    }
    chars.sort(function (a, b) { return a.sortOrder - b.sortOrder })

    this.setState({
      characters: chars,
      highScore: highS,
      currentScore: curS
    });
  };

  render() {
    return (
      <div>
        <ScoreBar currentScore={this.state.currentScore} highScore={this.state.highScore} />
        <div className="row">
          {this.state.characters.map(character => (
            <div className="col-md-3">
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
    );
  }
}

export default App;
