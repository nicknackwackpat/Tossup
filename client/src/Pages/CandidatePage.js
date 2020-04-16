import React from 'react';
import Header from "../components/Navbar/navbar.js"
import Candidate from "../components/CandidateSelect/candidate.js";
// import {Candidate} from "../components/CandidateSelect";

// const [] = useState([])

function CandidatePage (){
    return (
        <div>
    <Header />
    <Candidate />
    {/* <TopMenu /> */}
   
        </div>
    )}



export default CandidatePage;