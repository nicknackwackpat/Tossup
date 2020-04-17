import React from "react";
import "./style.css";
import { Table } from "reactstrap";

const Candidate = (props) => {
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log("clicked to go to elections");
  };

  return (
    <div>
      <div className="row2">
        {/* <div className="col-4"></div> */}
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Candidate Name</th>
              <th>Color </th>
              {/* <th>Img</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    {...props}
                  />
              </td>
              <td>Table cell</td>
              {/* <td>Table cell</td> */}
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    {...props}
                  />
                </div>
              </td>
              <td>Table cell</td>
              {/* <td>Table cell</td> */}
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    {...props}
                  />
              </td>
              <td>Table cell</td>
              {/* <td>Table cell</td> */}
            </tr>

            <tr>
              <th scope="row">4</th>
              <td>
                <div className="input-group-prepend">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    {...props}
                  />
                </div>
              </td>
              <td>Table cell</td>
              {/* <td>Table cell</td> */}
            </tr>
          </tbody>
        </Table>
      </div>
      <br />

      <br />
      <div>
        <button
          {...props}
          type="button"
          className="btn primary btn-lg"
          id="startBtn"
          onClick={"/election"}
        >
          Let the vote begin
        </button>

        {/* type="submit" onClick={} */}
      </div>
    </div>
  );
};
export default Candidate;
