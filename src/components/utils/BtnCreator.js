import "../../styles/BtnCreator.css";
import React, { Component } from "react";

class BtnCreator extends Component {
  render() {
    const {
      id = null,
      idxNum = null,
      group = null,
      className = null,
      type = "button",
      func = null,
      description = null,
    } = this.props;
    return (
      <button
        type={type}
        className={className}
        onClick={() => func(id, group, idxNum)}
      >
        {description}
      </button>
    );
  }
}

export default BtnCreator;
