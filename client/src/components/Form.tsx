import React, { Component } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PersonalDetails from "./form/PersonalDetails";
import WorkExperience from "./form/WorkExperience";
import Education from "./form/Education";
import {
  PersonalInterface,
  ExperienceInterface,
  EducationInterface,
} from "../models/interface-models";

interface IProps {
  personal: Array<PersonalInterface>;
  experience: Array<ExperienceInterface>;
  education: Array<EducationInterface>;
  handleChangeInput: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    group: string
  ) => void;
  handleAddSection: (id: string, group: string) => void;
  handleDeleteSection: (id: string, group: string) => void;
}

class Form extends Component<IProps> {
  render() {
    const {
      personal,
      experience,
      education,
      handleChangeInput,
      handleAddSection,
      handleDeleteSection,
    } = this.props;
    return (
      <Box
        sx={{
          width: 595,
          p: 4,
          display: "flex",
          flexDirection: "column",
          border: "2px solid #195c70",
          borderRadius: 1,
        }}
      >
        <Stack spacing={1} direction="column">
          <PersonalDetails
            data={personal}
            handleChangeInput={handleChangeInput}
          />
          <WorkExperience
            data={experience}
            handleChangeInput={handleChangeInput}
            handleAddSection={handleAddSection}
            handleDeleteSection={handleDeleteSection}
          />
          <Education
            data={education}
            handleChangeInput={handleChangeInput}
            handleAddSection={handleAddSection}
            handleDeleteSection={handleDeleteSection}
          />
        </Stack>
      </Box>
    );
  }
}

export default Form;
