import React, { Component } from "react";
import TextField from "@mui/material/TextField";

class InputCreator extends Component {
  render() {
    const { id, value, Change, group, name } = this.props;
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
          onChange={(e) => Change(e, id, group)}
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
        onChange={(e) => Change(e, id, group)}
        inputProps={{ style: { fontSize: "0.85rem" } }}
        InputLabelProps={{ style: { fontSize: "0.85rem" } }}
      />
    );
  }
}

export default InputCreator;
