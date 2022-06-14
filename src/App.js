import "./styles/App.css";
import React, { Component } from "react";
import {
  DefaultPersonal,
  DefaultExperience,
  DefaultEducation,
} from "./components/data/Default";
import { Data } from "./components/data/Data";
import uniquid from "uniquid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: [DefaultPersonal],
      experience: DefaultExperience.map((obj) => ({ ...obj })),
      education: DefaultEducation.map((obj) => ({ ...obj })),
    };
  }

  handleAddSection(id, group, idxNum) {
    const obj = {
      ...Data[idxNum],
      id: uniquid(),
    };
    this.setState({
      [group]: this.state[group].concat(obj),
    });
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
