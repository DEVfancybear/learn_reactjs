import React, { Component } from "react";
import "./App.css";
import Traffic from "./components/Traffic";
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: GREEN
    };
    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000);
  }
  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }
  render() {
    const currentColor= this.state;
    return (
      <>
        <Traffic  currentColor={this.state.currentColor}/>
      </>
    );
  }
}

export default App;
