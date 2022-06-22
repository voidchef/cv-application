import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputCreator from "../utils/InputCreator";

class PersonalDetails extends Component {
  render() {
    const { data, Change } = this.props;
    return (
      <Box>
        <Typography variant="h2" component="div">
          Personal Details
        </Typography>
        {Object.entries(data[0]).map(([key, value]) => {
          if (key !== "id") {
            return (
              <InputCreator
                key={`personal${key}`}
                group="personal"
                name={key}
                value={value}
                Change={Change}
                id={data[0].id}
              />
            );
          } else {
            return null;
          }
        })}
      </Box>
    );
  }
}

export default PersonalDetails;
