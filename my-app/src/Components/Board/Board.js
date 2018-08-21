import React, { Component } from "react";
import "./Board.css";

export default class BoardTop extends Component {
  constructor(props) {
    super(props);

    this.setState = {};
  }
  render() {
    return (
      <div className="Board">
        <div className="Board__top Board__style">
          <div className="Board__tile Corner__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
        </div>

        <div className="Board__right">
          <div className="Board__tile Corner__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
          <div className="Board__tile">test</div>
        </div>
      </div>
    );
  }
}
