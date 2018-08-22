import React, { Component } from "react";
import "./Board.css";
import classnames from "classnames";

import Tile from "./Tile/Tile";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.setState = {};
  }

  render() {
    console.log("BOARD PROPS", this.props);
    console.log("BOARD STATE", this.state);
    let tileClasses = classnames;

    return (
      <div className="Board">
        <div className="Grid__container">
          {this.props.tileContent.map((content, index) => {
            console.log(index);
            return (
              <div
                className={classnames({
                  tile: true,
                  corner: content.id % 10 === 0,
                  top: 0 < content.id && content.id < 10,
                  right: 10 < content.id && content.id < 20,
                  bottom: 20 < content.id && content.id < 30,
                  left: 30 < content.id && content.id < 40
                })}
                key={index}
              >
                {content.name}
              </div>
            );
          })}
          <div className="middle">Hello</div>
        </div>
      </div>
    );
  }
}
