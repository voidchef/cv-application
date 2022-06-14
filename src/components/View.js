import "../styles/View.css";
import React, { Component } from "react";
import PersonalDetailsView from "./view/PersonalDetailsView";
import WorkExperienceView from "./view/WorkExperienceView";
import EducationView from "./view/EducationView";

class View extends Component {
  render() {
    const { personal, experience, education } = this.props;
    return (
      <div className="resumeView page">
        <PersonalDetailsView data={personal} />
        <WorkExperienceView data={experience} />
        <EducationView data={education} />
      </div>
    );
  }
}

export default View;
