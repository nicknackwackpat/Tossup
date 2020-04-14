import React, { Component } from "react";
import "./map.css";
import USAMap from "react-usa-map";
// import Candidate from "candidate.js";

class Map extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  getStateNames = (event) => {
    const stateArray = [];

    for (i = 0; i < stateArray.length; i++) {
      let stateName = event.target.dataset.name;

      stateName.push(stateArray);
    }
    console.log(stateArray);
  };

  getStateVotes = () => {
    this.getStateNames();

    let voteTotal = 100;
    let candidate1 = "Johnny Bravo";
    let candidate2 = "Kim Possible";


  };

  statesCustomConfig = () => {
    return {
      NJ: {
        fill: "navy",
        clickHandler: (event) =>
          console.log("Custom handler for NJ", event.target.dataset),
      },
      NY: {
        fill: "#CC0000",
      },
    };
  };

  render() {
    return (
      <div className="map">
        <USAMap
          customize={this.statesCustomConfig()}
          onClick={this.mapHandler}
        />
      </div>
    );
  }
}

export default Map;
