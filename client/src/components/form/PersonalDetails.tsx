import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputCreator from "../utils/InputCreator";
import { PersonalInterface } from "../../models/interface-models";

interface IProps {
  data: Array<PersonalInterface>;
  handleChangeInput: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    group: string
  ) => void;
}

class PersonalDetails extends Component<IProps> {
  render() {
    const { data, handleChangeInput } = this.props;
    if (data.length === 0) {
      return null;
    }

    return (
      <Box>
        <Typography variant="h2" component="div">
          Personal Details
        </Typography>
        {Object.entries(data[0]).map(([key, value], i) => {
          if (key !== "_id" && key !== "__v") {
            return (
              <InputCreator
                key={`personal${i}`}
                group="personal"
                name={key}
                value={value}
                handleChangeInput={handleChangeInput}
                id={data[0]._id}
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
