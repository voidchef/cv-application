import "./styles/App.css";
import React, { Component } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import {
  DefaultPersonal,
  DefaultExperience,
  DefaultEducation,
} from "./components/data/Default";
import { Data } from "./components/data/Data";
import Form from "./components/Form";
import View from "./components/View";
import uniqid from "uniqid";

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
      id: uniqid(),
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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    );
  }
}

export default App;
