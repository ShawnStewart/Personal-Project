import React, { Component } from "react";
import Board from "./Board/Board";
import { Button } from "semantic-ui-react";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roll: null,
      tileContent: [],
      tiles: []
    };
  }

  GenerateTileContent = () => {
    let tileContent = [];
    let Oddincrementer = 28;
    let Evenincrementer = 1;
    let lastrow = 30;
    for (let i = 0; i < 40; i++) {
      if (i < 11) {
        tileContent.push({
          id: i,
          name: "test" + i,
          price: (i + 1) * 23
        });
      } else if (i > 28) {
        tileContent.push({
          id: lastrow,
          name: "test" + lastrow,
          price: (i * lastrow + 1) * 23
        });
        lastrow -= 1;
      } else {
        if (i % 2 === 1) {
          tileContent.push({
            id: i + Oddincrementer,
            name: "test" + (i + Oddincrementer),
            price: (i * Oddincrementer + 1) * 23
          });
          Oddincrementer -= 3;
        } else {
          tileContent.push({
            id: i - Evenincrementer,
            name: `test ${i - Evenincrementer}`,
            price: (i * Evenincrementer + 1) * 23
          });
          Evenincrementer += 1;
        }
      }
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

  componentWillMount = () => {
    this.GenerateTileContent();
  };

  render() {
    console.log("GAME STATE", this.state);
    return (
      <div>
        <Board tileContent={this.state.tileContent} />
        <Button content="Roll dice" onClick={this.handleDiceRoll} />
        <Button content="Get contents" onClick={this.GenerateTileContent} />
      </div>
    );
  }
}
