import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import BoardTop from "./Components/Board/Board";

import Nav from "./Components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <BoardTop />
      </div>
    );
  }
}

export default App;
