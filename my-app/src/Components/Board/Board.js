import React, { Component } from "react";
import "./Board.css";

export default class BoardTop extends Component {
  constructor(props) {
    super(props);

    this.setState = {};
  }

  // Generate board

  render() {
    return (
      <div className="Board">
        <div className="Grid__container">
          <div className="Board__top Board__style">
            <div className="Board__tile__across Corner__tile">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
          </div>

          <div className="Board__left">
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__across Corner__tile">test</div>
          </div>

          <div className="Board__right">
            <div className="Board__tile__across Corner__tile">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
            <div className="Board__tile__side">test</div>
          </div>

          <div className="Board__bottom Board__style">
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across">test</div>
            <div className="Board__tile__across Corner__tile">test</div>
          </div>
        </div>
      </div>
    );
  }
}
