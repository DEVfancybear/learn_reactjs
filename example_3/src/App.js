import React, { Component } from "react";
import "./App.css";
import Accordion from "./components/Accrordion";

class App extends Component {
  render() {
    return (
      <>
        <Accordion heading="Heading">Test
        <p>Dương đệp zai</p>
        </Accordion>
      </>
    );
  }
}

export default App;
