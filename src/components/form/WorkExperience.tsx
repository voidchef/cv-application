import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputCreator from "../utils/InputCreator";
import BtnCreator from "../utils/BtnCreator";
import { ExperienceModel } from "../../models/interface-models";

interface IProps {
  data: Array<ExperienceModel>;
  handleChangeInput: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    group: string
  ) => void;
  handleAddSection: (id: string, group: string) => void;
  handleDeleteSection: (id: string, group: string) => void;
}

class WorkExperience extends Component<IProps> {
  render() {
    const { data, handleChangeInput, handleAddSection, handleDeleteSection } =
      this.props;
    return (
      <Box>
        <Typography variant="h2" component="div">
          Work Experience
        </Typography>
        {data.map((details, i, data) => {
          return (
            <Box key={`experience${i}`}>
              {Object.entries(details).map(([key, value]) => {
                if (key !== "id") {
                  return (
                    <InputCreator
                      key={`experience${key}`}
                      group="experience"
                      name={key}
                      value={value}
                      handleChangeInput={handleChangeInput}
                      id={details.id}
                    />
                  );
                } else {
                  return null;
                }
              })}
              <BtnCreator
                group="experience"
                className="handleDeleteSectionBtn"
                onClick={handleDeleteSection}
                id={details.id}
                description="Delete"
              />
              {data.length - 1 === i && (
                <BtnCreator
                  group="experience"
                  className="handleAddSectionBtn"
                  onClick={handleAddSection}
                  id=""
                  description="Add"
                />
              )}
            </Box>
          );
        })}
        {data.length === 0 && (
          <BtnCreator
            id=""
            group="experience"
            className="handleAddSectionBtn"
            onClick={handleAddSection}
            description="Add"
          />
        )}
      </Box>
    );
  }
}

export default WorkExperience;
