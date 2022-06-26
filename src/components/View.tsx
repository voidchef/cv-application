import React, { Component } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PersonalDetailsView from "./view/PersonalDetailsView";
import WorkExperienceView from "./view/WorkExperienceView";
import EducationView from "./view/EducationView";
import {
  PersonalModel,
  ExperienceModel,
  EducationModel,
} from "../models/interface-models";

interface IProps {
  personal: Array<PersonalModel>;
  experience: Array<ExperienceModel>;
  education: Array<EducationModel>;
}

class View extends Component<IProps> {
  render() {
    const { personal, experience, education } = this.props;
    return (
      <Box
        sx={{
          Height: 842,
          width: 595,
          p: 4,
          border: "2px solid #195c70",
          borderRadius: 1,
        }}
      >
        <Stack spacing={2} direction="column">
          <PersonalDetailsView data={personal} />
          <WorkExperienceView data={experience} />
          <EducationView data={education} />
        </Stack>
      </Box>
    );
  }
}

export default View;
