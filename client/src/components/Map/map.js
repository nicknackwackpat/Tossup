import React, { Component } from "react";
import "./map.css";
import USAMap from "react-usa-map";
// import d3 from 'd3';
import data from "./data/us-states.js";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Map extends Component {
  mapHandler = (event) => {
    console.log(data);
  };

  state = {
    results: {},
    fillColor: "",
    message: "",
  };

  componentDidMount() {
    ////componentDidMountMap();
  }

  componentDidMountMap = () => {
    API.getResults()
      .then((res) => {
        const electionResults = res.data;
        let mapColors = {}; //props like TX: {fill: "BLUE"},

        let overallVotes = {};
        const electionResultsWithWinner = electionResults.map(
          (stateResults) => {
            let winner = {
              name: "",
              color: "",
              voteTotal: 0,
            };

            let colorMap = {
              Joe: "#983158",
              Amy: "#FFCCFF",
              Nick: "#00B050",
              Nelson: "#388FCE",
            };

            stateResults.candidates.forEach((candidate, index) => {
              if (overallVotes[candidate.name]) {
                overallVotes[candidate.name] += candidate.voteTotal;
              } else {
                overallVotes[candidate.name] = candidate.voteTotal;
              }
              candidate.color = colorMap[candidate.name];
              if (winner.voteTotal < candidate.voteTotal) {
                winner = candidate;
                winner.color = candidate.color;
              }
            });
            stateResults.winner = winner;
            return stateResults;
          }
        );
        console.log("OA", overallVotes);

        let max = 0;
        let electionWinner = "no one";

        Object.keys(overallVotes).forEach((elected) => {
          if (overallVotes[elected] > max) {
            electionWinner = elected;
            max = overallVotes[elected];
          }
        });
        this.setState({
          message: `The winner of this election was ${electionWinner} with ${max} votes!`,
        });
        console.log(electionResultsWithWinner);
        electionResultsWithWinner.forEach((x) => {
          mapColors[x.stateID] = { fill: x.winner.color };
        });
        this.setState({ results: mapColors, winner: electionWinner }, () =>
          console.log("set results", this.state)
        );
      })
      .catch((err) => {
        console.log(err);
      });
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
      PA: {
        fill: "#CC0000",
      },
    };
  };

  render() {
    return (
      <div className="map">
        <button
          id="mainBtn"
          className="btn primary btn-lg"
          onClick={this.componentDidMountMap}
        >
          Start Election
        </button>
        <USAMap
          title={"TossUp"}
          customize={this.state.results || this.statesCustomConfig()}
          onClick={this.mapHandler}
        />
        <h1>{this.state.message}</h1>
        <Link to="/results">
          <button
            type="button"
            className="btn primary btn-lg"
            id="mainBtn"
          >
            View detailed results
          </button>
        </Link>
      </div>
    );
  }
}

export default Map;
