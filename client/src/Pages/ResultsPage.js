import React from 'react';
import TopMenu from "../components/TopMenu/topMenu.js";
import Header from "../components/Header/header.js";
import Results from "../components/Results/results.js";

function ResultsPage (){
    return (
    <div>
    <TopMenu />
    {/* <Header />  */}
    <Results />
    </div>
    );
}

export default ResultsPage;