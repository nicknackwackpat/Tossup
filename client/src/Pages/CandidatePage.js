import React from 'react';
import Header from "../components/Navbar/navbar.js"
import Candidate from "../components/CandidateSelect/candidate.js";
import TopMenu from "../components/Navbar/navbar.js";

// const [] = useState([])

function CandidatePage (){
    return (
        <div>
    <TopMenu />
    <Header />
    <Candidate />
   
        </div>
    )}

export default CandidatePage;