import "../../styles/WorkExperienceView.css";
import React, { Component } from "react";

class WorkExperienceView extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="WorkExperienceView">
        <h3>WORK EXPERIENCE</h3>
        {data.map((details) => {
          return (
            <div className="experience">
              <div className="experienceHeading">
                <h4>{details["Company"]}</h4>
                <div className="experienceDetails">
                  {details["Position"]} |{" "}
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

export default WorkExperienceView;
