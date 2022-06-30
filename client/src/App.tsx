import React, { Component } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Container from "@mui/material/Container";
import { ExperienceModel, EducationModel } from "./data/DataModel";
import Form from "./components/Form";
import View from "./components/View";
import {
  State,
  PersonalInterface,
  ExperienceInterface,
  EducationInterface,
} from "./models/interface-models";
import Services from "./services/services";

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      personal: [],
      experience: [],
      education: [],
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleAddSection = this.handleAddSection.bind(this);
    this.handleDeleteSection = this.handleDeleteSection.bind(this);
  }

  componentDidMount() {
    Services.getToken()
      .then(() => {
        Services.getAll().then((response) => {
          const { personal, experience, education } = response;
          this.setState({
            personal: personal,
            experience: experience,
            education: education,
          });
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  handleChangeInput(
    e: { target: { name: string; value: string } },
    id: string,
    group: string
  ) {
    const { name, value } = e.target;
    const newObj: any = { [name]: value };
    Services.update(id, group, newObj)
      .then((response) => {
        if (group === "experience") {
          const obj: ExperienceInterface[] = this.state[group].map((data) => {
            if (data._id === String(id)) {
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
          const obj: EducationInterface[] = this.state[group].map((data) => {
            if (data._id === String(id)) {
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
          const obj: PersonalInterface[] = this.state[group].map((data) => {
            if (data._id === String(id)) {
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
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleAddSection(id: string, group: string) {
    if (group === "experience") {
      Services.create(group, ExperienceModel)
        .then((response) => {
          this.setState({ experience: this.state.experience.concat(response) });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (group === "education") {
      Services.create(group, EducationModel)
        .then((response) => {
          this.setState({ education: this.state.education.concat(response) });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleDeleteSection(id: string, group: string) {
    Services.remove(group, id)
      .then((response) => {
        if (group === "experience") {
          const obj: ExperienceInterface[] = this.state[group].filter(
            (data) => data._id !== String(id)
          );
          this.setState({ experience: obj });
        } else if (group === "education") {
          const obj: EducationInterface[] = this.state[group].filter(
            (data) => data._id !== String(id)
          );
          this.setState({ education: obj });
        }
      })
      .catch((error) => {
        console.log(error);
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
