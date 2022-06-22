import "../styles/Form.css";
import React, { Component } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PersonalDetails from "./form/PersonalDetails";
import WorkExperience from "./form/WorkExperience";
import Education from "./form/Education";

class Form extends Component {
  render() {
    const { personal, experience, education, Add, Delete, Change } = this.props;
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
          <PersonalDetails data={personal} Change={Change} />
          <WorkExperience
            data={experience}
            Change={Change}
            Add={Add}
            Delete={Delete}
          />
          <Education
            data={education}
            Change={Change}
            Add={Add}
            Delete={Delete}
          />
        </Stack>
      </Box>
    );
  }
}

export default Form;

