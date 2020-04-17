import React from "react";
import API from "../../utils/API";
import "./results.css";


class Results extends React.Component {
    state = {
        usStates: [],
        sortOrder: ""

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


    //Sort States by Alphabetically (A-Z)
    // sortByName = () => {
    //     let sortedStates = this.state.States.sort((a, b) => {
    //         if (b.name.first > a.name.first) {
    //             return -1;
    //         }
    //         if (a.name.first > b.name.first) {
    //             return 1;
    //         }

    //         return 0;
    //     });

    // If descending, reverse with sortedStates.reverse()
    // if (this.state.sortOrder === "DESC") {
    //     sortedEmployees.reverse();

    //     this.setState({ employees: sortedEmployees, sortOrder: "ASC" });
    // } else {
    //     this.setState({ employees: sortedEmployees, sortOrder: "DESC" });
    // }
    // };




    //This will render the results on the page
    render() {
        console.log(this.state.usStates)
        return (
            <div>
                <table>
                    <thead>
                     <tr>
                         <th>State</th>
                         <th>Nick</th>
                         <th>Joe</th>
                         <th>Amy</th>
                         <th>Nelson</th>
                     </tr>
                    </thead>
                    { <tbody>
                        {this.state.usStates &&
                            this.state.usStates.map((stateResult, i) => (
                                <tr id="subHead" key={i}>
                                    <td>{stateResult.stateID}  </td>
                                    <td>{stateResult.winner === 0 ? 
                                        <strong>{stateResult.candidates[0].voteTotal}</strong>
                                        :
                                        <>{stateResult.candidates[0].voteTotal}</>
                                    }</td>
                                   <td>{stateResult.winner === 1 ? 
                                        <strong>{stateResult.candidates[1].voteTotal}</strong>
                                        :
                                        <>{stateResult.candidates[1].voteTotal}</>
                                    }</td>
                                    <td>{stateResult.winner === 2 ? 
                                        <strong>{stateResult.candidates[2].voteTotal}</strong>
                                        :
                                        <>{stateResult.candidates[2].voteTotal}</>
                                    }</td>
                                    <td>{stateResult.winner === 3 ? 
                                        <strong>{stateResult.candidates[3].voteTotal}</strong>
                                        :
                                        <>{stateResult.candidates[3].voteTotal}</>
                                    }</td>
                                </tr>
                            ))}
                    </tbody> }
                </table>
                <button id="SaveNtn" type="button" class="btn btn-success">Save Results</button>
                <button id="reset" type="button" class="btn btn-danger">New Sim</button>
            </div>
        );
    }
}

export default Results;