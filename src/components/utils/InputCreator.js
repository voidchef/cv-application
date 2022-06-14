import "../../styles/InputCreator.css";
import React, { Component } from "react";

class InputCreator extends Component {
  render() {
    const { id, value, Change, group, name, type = "text" } = this.props;
    if (type === "textarea") {
      return (
        <textarea
          className={name}
          id={id}
          name={name}
          type={type}
          placeholder={name}
          onChange={(e) => Change(e, id, group)}
          value={value}
        />
      );
    } else {
      return (
        <input
          className={name}
          id={id}
          name={name}
          type={type}
          placeholder={name}
          onChange={(e) => Change(e, id, group)}
          value={value}
        />
      );
    }
  }
}

export default InputCreator;
