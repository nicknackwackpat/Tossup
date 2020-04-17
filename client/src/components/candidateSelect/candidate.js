import React from "react";
import "./style.css";
import { Table } from 'reactstrap';

const Candidate = (props) => {
const onChangeHandler = (e)=>{
    e.preventDefault();
    console.log(e.target.value);
    console.log("change happened");
}

    return (
        <div className="row2">
            <div className="col-4">
                <div className="input-group">
                    <div className="input-group-prepend"></div>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        {...props} />
                </div>
                <br />
                <div className="input-group">
                    <div className="input-group-prepend"></div>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        {...props} />
                </div>

                <br />

                <div className="input-group">
                    <div className="input-group-prepend"></div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        {...props} />
                </div>


                <br />


                <div className="input-group">
                    <div className="input-group-prepend"></div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        {...props} />
                </div>
            </div>
            <br />
            <div className="row3">

const Example = (props) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        </tr>
    </tbody>
    </Table>
);
}

export default Example;
                <button {...props} type="button" className="btn primary btn-lg" id="startBtn" onClick={("/election")}>Let the vote begin</button>

                {/* type="submit" onClick={} */}
            </div>
        </div>
    

    );

};


export default Candidate;
