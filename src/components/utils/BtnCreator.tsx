import React, { Component } from "react";
import Button from "@mui/material/Button";

interface IProps {
  id: string;
  group: string;
  className: string;
  description: string;
  onClick: (id: string, group: string) => void;
}

class BtnCreator extends Component<IProps> {
  render() {
    const { id, group, className, onClick, description } = this.props;
    return (
      <Button
        sx={{ margin: "8px 8px 8px 0px" }}
        variant="outlined"
        size="small"
        color="success"
        className={className}
        onClick={() => onClick(id, group)}
      >
        {description}
      </Button>
    );
  }
}

export default BtnCreator;
