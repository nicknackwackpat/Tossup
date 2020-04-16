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
    alert(event);
  };

  state = {
    results: [],
    fillColor: ""
  }

  componentDidMount() {
    API.getResults().then(res => {
      const electionResults = res.data;
      // console.log(res.data)
      const electionResultsWithWinner = electionResults.map((stateResults)=> {
        let winner = {
          name: "",
          color: "",
          voteTotal: 0,
        }

        stateResults.candidates.forEach(candidate => {
          stateResults.candidate[0].color = "#983158";
          stateResults.candidate[1].color = "#E02459";
          stateResults.candidate[2].color = "#08E14F";
          stateResults.candidate[3].color = "#388FCE";

          if (winner.voteTotal < candidate.voteTotal) {
            winner = candidate;
            winner.color = candidate.color
          }
        })
        stateResults.winner = winner;
        this.setState({fillColor: winner.color});
        return stateResults
      })

      console.log(electionResultsWithWinner);
      this.setState({ results: electionResultsWithWinner });

    }).catch(err => {
      console.log(err);
    });
  }

  changeStateColor = () => {
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
          customize={this.componentDidMount()}
          onClick={this.mapHandler}
        />
      </div>
    );
}
}

export default Map;
