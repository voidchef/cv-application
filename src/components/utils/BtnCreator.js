import React, { Component } from "react";
import Button from "@mui/material/Button";

class BtnCreator extends Component {
  render() {
    const {
      id = null,
      idxNum = null,
      group = null,
      className = null,
      func = null,
      description = null,
    } = this.props;
    return (
      <Button
        sx={{ margin: "8px 8px 8px 0px" }}
        variant="outlined"
        size="small"
        color="success"
        className={className}
        onClick={() => func(id, group, idxNum)}
      >
        {description}
      </Button>
    );
  }
}

export default BtnCreator;
