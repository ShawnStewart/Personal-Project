import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Nav from "./Components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
