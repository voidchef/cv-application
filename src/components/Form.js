import "../styles/Form.css";
import React, { Component } from "react";
import PersonalDetails from "./form/PersonalDetails";
import WorkExperience from "./form/WorkExperience";
import Education from "./form/Education";

class Form extends Component {
  render() {
    const { personal, experience, education, Add, Delete, Change } = this.props;
    return (
      <form class="resumeForm page">
        <PersonalDetails data={personal} Change={Change} />
        <WorkExperience
          data={experience}
          Change={Change}
          Add={Add}
          Delete={Delete}
        />
        <Education data={education} Change={Change} Add={Add} Delete={Delete} />
      </form>
    );
  }
}

export default Form;
