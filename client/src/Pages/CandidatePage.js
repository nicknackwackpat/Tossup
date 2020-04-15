import React, { useState } from 'react';
import TopMenu from "../components/Navbar/navbar.js";
import Candidate from "../components/CandidateSelect/candidate.js";
// import {Candidate} from "../components/CandidateSelect";


// const [] = useState([])

function CandidatePage (){
    
    return (
        <div>
    <TopMenu />
    <Candidate />
        </div>
    )}



export default CandidatePage;
