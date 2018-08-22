import React, { Component } from "react";

export default class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      players: [],
      price: 0,
      desc: ""
    };
  }

  render() {
    return <div />;
  }
}
