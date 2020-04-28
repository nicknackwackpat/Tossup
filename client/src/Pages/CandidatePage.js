import React from 'react';
import Header from "../components/Header/header.js"
import Candidate from "../components/Candidate/candidate.js";
import TopMenu from "../components/TopMenu/topMenu.js";

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