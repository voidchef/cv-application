import React, { Component } from "react";
import InputCreator from "../utils/InputCreator";
import BtnCreator from "../utils/BtnCreator";

class WorkExperience extends Component {
  render() {
    const { data, Change, Add, Delete } = this.props;
    return (
      <div className="workExperience">
        <h2>Work Experience</h2>
        {data.map((details, i, data) => {
          return (
            <div>
              {Object.entries(details).map(([key, value]) => {
                if (key !== "id") {
                  if (key === "Description") {
                    return (
                      <InputCreator
                        type="textarea"
                        group="experience"
                        name={key}
                        value={value}
                        Change={Change}
                        id={details.id}
                      />
                    );
                  } else {
                    return (
                      <InputCreator
                        type="text"
                        group="experience"
                        name={key}
                        value={value}
                        Change={Change}
                        id={details.id}
                      />
                    );
                  }
                }
              })}
              <BtnCreator
                group="experience"
                className="DeleteBtn"
                func={Delete}
                id={details.id}
                description="Delete"
              />
              {data.length - 1 === i && (
                <BtnCreator
                  group="experience"
                  idxNum="1"
                  className="AddBtn"
                  func={Add}
                  description="Add"
                />
              )}
            </div>
          );
        })}
        {data.length === 0 && (
          <BtnCreator
            group="experience"
            idxNum="1"
            className="AddBtn"
            func={Add}
            description="Add"
          />
        )}
      </div>
    );
  }
}

export default WorkExperience;
