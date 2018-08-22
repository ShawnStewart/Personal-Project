import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Game from "./Components/Game/Game";

import Nav from "./Components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Game />
      </div>
    );
  }
}

export default App;
