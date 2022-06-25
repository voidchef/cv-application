import React, { Component } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Container from "@mui/material/Container";
import {
  DefaultPersonal,
  DefaultExperience,
  DefaultEducation,
} from "./components/data/Default";
import { Experience, Education } from "./components/data/Data";
import Form from "./components/Form";
import View from "./components/View";
import {
  State,
  PersonalModel,
  ExperienceModel,
  EducationModel,
} from "./models/interface-models";
import uniqid from "uniqid";

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

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
        <Container
          maxWidth={false}
          sx={{
            paddingY: 3,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
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
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;