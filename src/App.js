import "./styles/App.css";
import React, { Component } from "react";
import {
  DefaultPersonal,
  DefaultExperience,
  DefaultEducation,
} from "./components/data/Default";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: [DefaultPersonal],
      experience: DefaultExperience.map((obj) => ({ ...obj })),
      education: DefaultEducation.map((obj) => ({ ...obj })),
    };
  }
  
  render() {
    return <div className="App"></div>;
  }
}

export default App;
