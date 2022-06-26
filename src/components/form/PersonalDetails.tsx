import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputCreator from "../utils/InputCreator";
import uniqid from "uniqid";
import { PersonalModel } from "../../models/interface-models";

interface IProps {
  data: Array<PersonalModel>;
  handleChangeInput: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    group: string
  ) => void;
}

class PersonalDetails extends Component<IProps> {
  render() {
    const { data, handleChangeInput } = this.props;
    return (
      <Box>
        <Typography variant="h2" component="div">
          Personal Details
        </Typography>
        {Object.entries(data[0]).map(([key, value]) => {
          if (key !== "id") {
            return (
              <InputCreator
                key={uniqid()}
                group="personal"
                name={key}
                value={value}
                handleChangeInput={handleChangeInput}
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
