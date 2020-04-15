import React from "react";
import "./style.css";

const Candidate = (props) => {
const onChangeHandler = (e)=>{
    console.log(e.target.value);
    console.log("change happened");
}

    return (
        <div className="row2">

            <select id="colorselector" onChange={onChangeHandler} {...props}>
                <option value="106" data-color="#A0522D">sienna</option>
                <option value="47" data-color="#CD5C5C">indianred</option>
                <option value="87" data-color="#FF4500">orangered</option>
                <option value="15" data-color="#DC143C">crimson</option>
                <option value="24" data-color="#FF8C00">darkorange</option>
                <option value="78" data-color="#C71585">mediumvioletred</option>
            </select>

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


                <div class="input-group">
                    <div class="input-group-prepend"></div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        {...props} />
                </div>


                <br />


                <div class="input-group">
                    <div class="input-group-prepend"></div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        {...props} />
                </div>



            </div>

            <br />

            <div class="row3">
                <button {...props} type="button" class="btn btn-danger btn-lg" id="startBtn">Let the vote begin</button>

            </div>
        </div>
    

    );

};


export default Candidate;
