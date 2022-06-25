import React, { Component } from "react";
import TextField from "@mui/material/TextField";

interface IProps {
  id: string;
  group: string;
  name: string;
  value: string;
  handleChangeInput: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    group: string
  ) => void;
}

class InputCreator extends Component<IProps> {
  render() {
    const { id, value, handleChangeInput, group, name } = this.props;
    if (name === "Description") {
      return (
        <TextField
          id={id}
          label={name}
          name={name}
          defaultValue={value}
          fullWidth
          multiline
          size="small"
          margin="dense"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInput(e, id, group)
          }
          inputProps={{ style: { fontSize: "0.85rem" } }}
          InputLabelProps={{ style: { fontSize: "0.85rem" } }}
        />
      );
    }
    return (
      <TextField
        id={id}
        label={name}
        name={name}
        defaultValue={value}
        fullWidth
        size="small"
        margin="dense"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeInput(e, id, group)
        }
        inputProps={{ style: { fontSize: "0.85rem" } }}
        InputLabelProps={{ style: { fontSize: "0.85rem" } }}
      />
    );
  }
}

export default InputCreator;
