import "./styles/App.css";
import React, { Component } from "react";
import {
  DefaultPersonal,
  DefaultExperience,
  DefaultEducation,
} from "./components/data/Default";
import { Data } from "./components/data/Data";
import Form from "./components/Form";
import View from "./components/View";
import uniquid from "uniquid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: [DefaultPersonal],
      experience: DefaultExperience.map((obj) => ({ ...obj })),
      education: DefaultEducation.map((obj) => ({ ...obj })),
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleAddSection = this.handleAddSection.bind(this);
    this.handleDeleteSection = this.handleDeleteSection.bind(this);
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
    const { personal, experience, education } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Form
            personal={personal}
            experience={experience}
            education={education}
            Add={this.handleAddSection}
            Change={this.handleChangeInput}
            Delete={this.handleDeleteSection}
          />
          <View
            personal={personal}
            experience={experience}
            education={education}
          />
        </div>
      </div>
    );
  }
}

export default App;
