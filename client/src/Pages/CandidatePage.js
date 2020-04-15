import React, { useState } from 'react';
import TopMenu from "../components/Navbar/navbar.js";
import Candidate from "../components/CandidateSelect/candidate.js";
// import {Candidate} from "../components/CandidateSelect";


// const [] = useState([])

function CandidatePage (){
    
    return (
        <div>
    <Candidate />
    <TopMenu />
   
        </div>
    )}



export default CandidatePage;
