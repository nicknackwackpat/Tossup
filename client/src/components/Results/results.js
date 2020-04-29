import React from "react";
import API from "../../utils/API";
import "./results.css";
import { Link } from "react-router-dom";
import {Row, Col } from 'reactstrap';
// import { Message } from "./map.js"

const winnerColor = {
    color: 'green',
    fontSize: 24
}

class Results extends React.Component {
    state = {
        usStates: [],
        sortOrder: "ASC"
    };

    componentDidMount() {
        API.getResults()
        .then(res => {
            for ( let i=0; i<res.data.length; i++){
                let highestVote = 0
                let voterIndex = 0
                for (let j=0; j<res.data[i].candidates.length; j++){
                    if (highestVote < res.data[i].candidates[j].voteTotal){
                        highestVote = res.data[i].candidates[j].voteTotal
                        voterIndex = j;
                    }
                }
                res.data[i].winner = voterIndex
            }
            this.setState({ usStates: res.data })
    })
            .catch(err => console.log(err))
    }


    // Sort States by Alphabetically (A-Z)
    sortByName = () => {
        let sortedStates = this.state.usStates.sort((a, b) => {
            if (b.stateID > a.stateID) {
                return -1;
            }
            if (a.stateID > b.stateID) {
                return 1;
            }

            return 0;
        });

    // If descending, reverse with sortedStates.reverse()
    if (this.state.sortOrder === "DESC") {
        sortedStates.reverse();

        this.setState({ usStates: sortedStates, sortOrder: "ASC" });
    } else {
        this.setState({ usStates: sortedStates, sortOrder: "DESC" });
    }
    };

    //This will render the results on the page
    render() {
        console.log(this.state.usStates)
        return (
            <div className="container">
                <h1>{this.state.message}</h1>
                <table>
                    <thead>
                     <tr>
                         <th onClick={this.sortByName}> State</th>
                         <th></th>
                         <th></th>
                         <th></th>
                         <th></th>
                     </tr>
                    </thead>
                    { <tbody>
                        {this.state.usStates &&
                            this.state.usStates.map((stateResult, i) => (
                                <tr id="subHead" key={i}>
                                    <td>{stateResult.stateID}  </td>
                                    <td>{stateResult.winner === 0 ? 
                                        <strong style={winnerColor}>{stateResult.candidates[0].name} <br />{stateResult.candidates[0].voteTotal}</strong>
                                        :
                                        <>{stateResult.candidates[0].name} <br />{stateResult.candidates[0].voteTotal}</>
                                    }</td>
                                   <td>{stateResult.winner === 1 ? 
                                        <strong style={winnerColor}>{stateResult.candidates[1].name} <br />{stateResult.candidates[1].voteTotal}</strong>
                                        :
                                        <>{stateResult.candidates[1].name} <br />{stateResult.candidates[1].voteTotal}</>
                                    }</td>
                                    <td>{stateResult.winner === 2 ? 
                                        <strong style={winnerColor}>{stateResult.candidates[2].name} <br />{stateResult.candidates[2].voteTotal}</strong>
                                        :
                                        <>{stateResult.candidates[2].name} <br />{stateResult.candidates[2].voteTotal}</>
                                    }</td>
                                    <td>{stateResult.winner === 3 ? 
                                        <strong style={winnerColor}>{stateResult.candidates[3].name} <br />{stateResult.candidates[3].voteTotal}</strong>
                                        :
                                        <>{stateResult.candidates[3].name} <br />{stateResult.candidates[3].voteTotal}</>
                                    }</td>
                                </tr>
                            ))}
                    </tbody> }
                </table>
                <Row>
      <Col xs="6" style={{alignContent:"center"}}>
                <Link to="/"><button id="mainBtn" type="button" className="btn">Save Results</button></Link>
                </Col>

                <Col xs="6" style={{alignContent:"center"}}>        
                <Link to="/">
                <button id="secondaryBtn" type="button" className="btn">New Election</button></Link>
                </Col>
            </Row>
            </div>
        );
    }
}

export default Results;