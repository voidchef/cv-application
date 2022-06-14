import "../../styles/EducationView.css";
import React, { Component } from "react";

class EducationView extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="EducationView">
        <h3>EDUCATION</h3>
        {data.map((details) => {
          return (
            <div className="experience">
              <div className="experienceHeading">
                <h4>{details["Course"]}</h4>
                <div className="experienceDetails">
                  {details["University"]} |{" "}
                  <span className="duration">
                    {details["Start Date"]} – {details["End Date"]}
                  </span>
                </div>
              </div>
              <div className="experienceDescription">
                {details["Description"]}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationView;
