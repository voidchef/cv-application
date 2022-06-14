import React, { Component } from "react";
import InputCreator from "../utils/InputCreator";

class PersonalDetails extends Component {
  render() {
    const { data, Change } = this.props;
    return (
      <div className="PersonalDetails">
        <h2>Personal Details</h2>
        {Object.entries(data[0]).map(([key, value]) => {
          if (key !== "id") {
            if (key === "Description") {
              return (
                <InputCreator
                  type="textarea"
                  group="personal"
                  name={key}
                  value={value}
                  Change={Change}
                  id={data[0].id}
                />
              );
            } else {
              return (
                <InputCreator
                  type="text"
                  group="personal"
                  name={key}
                  value={value}
                  Change={Change}
                  id={data[0].id}
                />
              );
            }
          } else {
            return null
          }
        })}
      </div>
    );
  }
}

export default PersonalDetails;
