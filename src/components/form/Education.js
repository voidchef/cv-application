import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputCreator from "../utils/InputCreator";
import BtnCreator from "../utils/BtnCreator";

class Education extends Component {
  render() {
    const { data, Change, Add, Delete } = this.props;
    return (
      <Box>
        <Typography variant="h2" component="div">
          Education
        </Typography>
        {data.map((details, i, data) => {
          return (
            <Box key={`education${i}`}>
              {Object.entries(details).map(([key, value]) => {
                if (key !== "id") {
                  return (
                    <InputCreator
                      key={`education${key}`}
                      group="education"
                      name={key}
                      value={value}
                      Change={Change}
                      id={details.id}
                    />
                  );
                } else {
                  return null;
                }
              })}
              <BtnCreator
                group="education"
                className="DeleteBtn"
                func={Delete}
                id={details.id}
                description="Delete"
              />
              {data.length - 1 === i && (
                <BtnCreator
                  group="education"
                  idxNum="2"
                  className="AddBtn"
                  func={Add}
                  description="Add"
                />
              )}
            </Box>
          );
        })}
        {data.length === 0 && (
          <BtnCreator
            group="education"
            idxNum="2"
            className="AddBtn"
            func={Add}
            description="Add"
          />
        )}
      </Box>
    );
  }
}

export default Education;
