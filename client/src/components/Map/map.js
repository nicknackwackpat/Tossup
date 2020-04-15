import React, { Component } from "react";
import "./map.css";
import USAMap from "react-usa-map";
// import Candidate from "candidate.js";
// import d3 from 'd3';
import data from "./data/us-states.js";
import API from "../../utils/API";

class Map extends Component {
  mapHandler = (event) => {
    console.log(data);
    alert(event.target.dataset.name);
  };

  state = {
    results: []
  }

  componentDidMount() {
    API.getResults().then(res => {
      const electionResults = res.data;
      // console.log(res.data)
      const electionResultsWithWinner = electionResults.map((stateResults)=> {
        let winner = {
          name: "",
          voteTotal: 0
        }

        stateResults.candidates.forEach(candidate => {
          if (winner.voteTotal < candidate.voteTotal) {
            winner = candidate;
          }
        })
        stateResults.winner = winner
        return stateResults
      })
      console.log(electionResultsWithWinner);
      this.setState({ results: electionResultsWithWinner })
    }).catch(err => {
      console.log(err);
    });
  }


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
      PA: {
        fill: "#CC0000",
      }
    };
  };

  render() {
    return (
      <div className="map">
        <USAMap
          title={"TossUp"}
          customize={this.statesCustomConfig()}
          onClick={this.mapHandler}
        />
      </div>
    );
}
}

export default Map;
