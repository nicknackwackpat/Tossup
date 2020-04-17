import React from "react";
import API from "../../utils/API";
import "./results.css";


class ResultsPage extends React.Component {
    state = {
        usStates: [],
        sortOrder: ""

    };

    componentDidMount() {
        API.getResults()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    let highestVote = 0
                    let voterIndex = 0
                    for (let j = 0; j < res.data[i].candidates.length; j++) {
                        if (highestVote < res.data[i].candidates[j].voteTotal) {
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


    //This will render the results on the page
    render() {
        console.log(this.state.usStates)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>States</th>
                            <th>candidate 1</th>
                            <th>candidate 2</th>
                            <th>candidate 3</th>
                            <th>candidate 4</th>
                        </tr>
                    </thead>
                    {<tbody>
                        {this.state.usStates &&
                            this.state.usStates.map((stateResult, i) => (
                                <tr id="subHead" key={i}>
                                    <td>{stateResult.stateID}  </td>
                                    <td>{stateResult.winner === 0 ?
                                        <strong>{stateResult.candidates[0].name}</strong>
                                        :
                                        <>{stateResult.candidates[0].name}</>
                                    }</td>
                                    <td>{stateResult.winner === 1 ?
                                        <strong>{stateResult.candidates[1].name}</strong>
                                        :
                                        <>{stateResult.candidates[1].name}</>
                                    }</td>
                                    <td>{stateResult.winner === 2 ?
                                        <strong>{stateResult.candidates[2].name}</strong>
                                        :
                                        <>{stateResult.candidates[2].name}</>
                                    }</td>
                                    <td>{stateResult.winner === 3 ?
                                        <strong>{stateResult.candidates[3].name}</strong>
                                        :
                                        <>{stateResult.candidates[3].name}</>
                                    }</td>
                                </tr>
                            ))}
                    </tbody>}
                </table>
                <button id="SaveNtn" type="button" class="btn btn-success">Save Results</button>
                <button id="reset" type="button" class="btn btn-danger">New Sim</button>
            </div>
        );
    }
}

export default ResultsPage;
