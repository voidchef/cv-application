import "../../styles/PersonalDetailsView.css";
import React, { Component } from "react";

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
              <img
                src={process.env.PUBLIC_URL + "/img/phone-square-solid.svg"}
                alt="phone"
              ></img>
              {data[0]["Phone"]}
            </div>
            <div className="email">
              <img
                src={process.env.PUBLIC_URL + "/img/envelope-square-solid.svg"}
                alt="envelope"
              ></img>
              {data[0]["Email"]}
            </div>
            <div className="location">
              <img
                src={process.env.PUBLIC_URL + "/img/map-marker-alt-solid.svg"}
                alt="map"
              ></img>
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
