import React from "react";
import "../candidateSelect/style.css";

const Candidate = (props) => {

    return (
        <div class="row2">

            <select id="colorselector">
                <option value="106" data-color="#A0522D">sienna</option>
                <option value="47" data-color="#CD5C5C" selected="selected">indianred</option>
                <option value="87" data-color="#FF4500">orangered</option>
                <option value="15" data-color="#DC143C">crimson</option>
                <option value="24" data-color="#FF8C00">darkorange</option>
                <option value="78" data-color="#C71585">mediumvioletred</option>
            </select>

            <div class="col-4">


                <div class="input-group">
                    <div class="input-group-prepend"></div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </div>


                <br />


                <div class="input-group">
                    <div class="input-group-prepend"></div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </div>


                <br />


                <div class="input-group">
                    <div class="input-group-prepend"></div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </div>


                <br />


                <div class="input-group">
                    <div class="input-group-prepend"></div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </div>



            </div>

            <br />

            <div class="row3">
                <button type="button" class="btn btn-danger btn-lg" id="startBtn">Let the vote begin</button>

            </div>
        </div>
    

    );

};






export default Candidate;