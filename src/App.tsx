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

  handleChangeInput(
    e: { target: { name: string; value: string } },
    id: string,
    group: string
  ) {
    const { name, value } = e.target;
    if (group === "experience") {
      const obj: ExperienceModel[] = this.state[group].map((data) => {
        if (data.id === String(id)) {
          return {
            ...data,
            [name]: value,
          };
        } else {
          return data;
        }
      });
      this.setState({ experience: obj });
    } else if (group === "education") {
      const obj: EducationModel[] = this.state[group].map((data) => {
        if (data.id === String(id)) {
          return {
            ...data,
            [name]: value,
          };
        } else {
          return data;
        }
      });
      this.setState({ education: obj });
    } else if (group === "personal") {
      const obj: PersonalModel[] = this.state[group].map((data) => {
        if (data.id === String(id)) {
          return {
            ...data,
            [name]: value,
          };
        } else {
          return data;
        }
      });
      this.setState({ personal: obj });
    }
  }

  handleAddSection(id: string, group: string) {
    if (group === "experience") {
      const obj = {
        ...Experience,
        id: uniqid(),
      };
      this.setState({ experience: this.state.experience.concat(obj) });
    } else if (group === "education") {
      const obj = {
        ...Education,
        id: uniqid(),
      };
      this.setState({ education: this.state.education.concat(obj) });
    }
  }

  handleDeleteSection(id: string, group: string) {
    if (group === "experience") {
      this.setState({
        experience: this.state.experience.filter((obj) => obj.id !== id),
      });
    } else if (group === "education") {
      this.setState({
        education: this.state.education.filter((obj) => obj.id !== id),
      });
    }
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
            handleAddSection={this.handleAddSection}
            handleChangeInput={this.handleChangeInput}
            handleDeleteSection={this.handleDeleteSection}
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
