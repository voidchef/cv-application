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

  handleDeleteSection(id, group, idxNum) {
    const newObj = this.state[group].filter((obj) => obj.id !== id);
    this.setState({
      [group]: newObj,
    });
  }

  handleChangeInput(e, id, group) {
    const { name, value } = e.target;
    const obj = this.state[group].map((data) => {
      if (data.id === id) {
        return {
          ...data,
          [name]: value,
        };
      } else {
        return data;
      }
    });
    this.setState({
      [group]: obj,
    });
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
