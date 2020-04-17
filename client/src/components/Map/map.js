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
    results: {},
    fillColor: "",
    message: ""
  }

  componentDidMount() {
    ////loadingStuff();
}

  loadingStuff=()=> {
  API.getResults().then(res => {
    const electionResults = res.data;
    let mapColors={}//props like TX: {fill: "BLUE"},
    // console.log(res.data)
    let overallVotes = {

    }
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
        //console.log(index,candidate)
        if(overallVotes[candidate.name]){
          overallVotes[candidate.name]+=candidate.voteTotal
        }else{
          overallVotes[candidate.name]=candidate.voteTotal
        }
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
    console.log("OA",overallVotes)
    let max=0
    let bigWinner="nobody"
    Object.keys(overallVotes).forEach(joker=>{
      //his.setState({message: "the joker is "+joker})
      if (overallVotes[joker]>max){
        bigWinner=joker
        max=overallVotes[joker]
      }
    })
    this.setState({message:`The big winner was ${bigWinner} with ${max} votes`})
    console.log(electionResultsWithWinner);
    electionResultsWithWinner.forEach(x=>{
      mapColors[x.stateID]={fill: x.winner.color}
    })
    this.setState({ results: mapColors, winner:bigWinner,  }, ()=>console.log("set results",this.state));

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
        <h1 onClick={this.loadingStuff}>Simulate Election-click me!</h1>
        <USAMap
          title={"TossUp"}
          customize={this.state.results || this.statesCustomConfig()}
          onClick={this.mapHandler}
        />
        <h1>{this.state.message}</h1>
      </div>
    );
}
}

export default Map;
