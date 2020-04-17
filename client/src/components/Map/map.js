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
  };

  state = {
    results: [],
    fillColor: ""
  }

  componentDidMount() {
    ////loadingStuff();
}

  loadingStuff() {
  API.getResults().then(res => {
    const electionResults = res.data;
    let mapColors={}//props like TX: {fill: "BLUE"},
    // console.log(res.data)
    const electionResultsWithWinner = electionResults.map((stateResults)=> {
      let winner = {
        name: "",
        color: "",
        voteTotal: 0,
      }
      let colorMap = {
      "Joe": "#983158",
      "Amy": "#FFCCFF",
      "Nick": "#00B050",
      "Nelson": "#388FCE",
      }

      stateResults.candidates.forEach((candidate,index) => {
        console.log(index,candidate)
        candidate.color=colorMap[candidate.name]
        if (winner.voteTotal < candidate.voteTotal) {
          winner = candidate;
          winner.color = candidate.color
        }
      })
      stateResults.winner = winner;
      // this.setState({fillColor: winner.color});
      return stateResults
    })

    console.log(electionResultsWithWinner);
    //this.setState({ results: electionResultsWithWinner });

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
        <h1 onClick={this.loadingStuff}>CLICK ME!c</h1>
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
