import "../../styles/PersonalDetailsView.css";
import React, { Component } from "react";
import phoneIcon from "../../img/phone-square-solid.svg";
import emailIcon from "../../img/envelope-square-solid.svg";
import locationIcon from "../../img/map-marker-alt-solid.svg";

class PersonalDetailsView extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="PersonalDetailsView">
        <header>
          <div class="heading">
            <h1>{data[0]["Name"]}</h1>
            <h2>{data[0]["Title"]}</h2>
          </div>
          <div className="contact">
            <div className="phone">
              <img src={phoneIcon} alt="phone"></img>
              {data[0]["Phone"]}
            </div>
            <div className="email">
              <img src={emailIcon} alt="envelope"></img>
              {data[0]["Email"]}
            </div>
            <div className="location">
              <img src={locationIcon} alt="map"></img>
              {data[0]["Location"]}
            </div>
          </div>
        </header>
        <hr class="divider"></hr>
        <div class="selfDescription">
          <p>{data[0]["Description"]}</p>
        </div>
      </div>
    );
  }
}

export default PersonalDetailsView;
