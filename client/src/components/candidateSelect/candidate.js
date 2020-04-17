import React from "react";
import "./candidate.css";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

const Candidate = (props) => {
//   const onChangeHandler = (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//     console.log("clicked to go to elections");
//   };

  return (
    <div>
      <div className="row2">
        {/* <div className="col-4"></div> */}
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Candidate Name</th>
              <th>Color</th>
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

              <td><img className="resize" src="https://i.imgur.com/s4TxpmS.png" alt="mauve#983158" /></td>
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
              <td><img className="resize" src="https://i.imgur.com/LqxyKK5.png" alt="pink#ffccff" /></td>
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
              <td><img className="resize" src="https://i.imgur.com/mGkwTDl.png" alt="green#00b050" /></td>
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
              <td><img className="resize" src="https://i.imgur.com/OuVDomE.png" alt="blue##388fce" /></td>
              {/* <td>Table cell</td> */}
            </tr>
          </tbody>
        </Table>
      </div>
      <br />

      <br />
      <div>
          <Link to="/election">
        <button
        {...props}
          type="button"
          className="btn primary btn-lg"
          id="mainBtn">
        Let the voting begin!
          
        </button>
        </Link>
      </div>
    </div>
  );
};
export default Candidate;

// Color selector: eventually add this in to each Table, removing each one that is selected.Can also offer more options?
// <select id="colorselector" onChange={onChangeHandler} {...props}>
//                 <option data-color="#983158">mauve</option>
//                 <option data-color="#FFCCFF"></option>
//                 <option data-color="#00B050"></option>
//                 <option data-color="#388FCE"></option>
//             </select>