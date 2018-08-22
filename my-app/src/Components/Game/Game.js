import React, { Component } from "react";
import Board from "./Board/Board";
import { Button } from "semantic-ui-react";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roll: null,
      tileContent: []
    };
  }

  GenerateTileContent = () => {
    let tileContent = [];
    for (let i = 0; i < 40; i++) {
      tileContent.push({
        name: "test" + i,
        price: (i + 1) * 23
      });
    }

    this.setState({ tileContent });
  };

  handleDiceRoll = () => {
    let result = 1;
    while (result === 1) {
      result = Math.floor(Math.random() * 12) + 1;
    }
    this.setState({ roll: result });
  };

  render() {
    console.log("GAME STATE", this.state);
    return (
      <div>
        <Board tileContent={this.state.tileContent} />
        <Button content="Roll dice" onClick={this.handleDiceRoll} />
        <Button content="show shit" onClick={this.GenerateTileContent} />
      </div>
    );
  }
}
