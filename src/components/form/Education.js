import React, { Component } from "react";
import InputCreator from "../utils/InputCreator";
import BtnCreator from "../utils/BtnCreator";

class Education extends Component {
  render() {
    const { data, Change, Add, Delete } = this.props;
    return (
      <div className="education">
        <h2>Education</h2>
        {data.map((details, i, data) => {
          return (
            <div>
              {Object.entries(details).map(([key, value]) => {
                if (key !== "id") {
                  if (key === "Description") {
                    return (
                      <InputCreator
                        type="textarea"
                        group="education"
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
                        group="education"
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
                group="education"
                className="DeleteBtn"
                func={Delete}
                id={details.id}
                description="Delete"
              />
              {data.length - 1 === i && (
                <BtnCreator
                  group="education"
                  idxNum="2"
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
            group="education"
            idxNum="2"
            className="AddBtn"
            func={Add}
            description="Add"
          />
        )}
      </div>
    );
  }
}

export default Education;
