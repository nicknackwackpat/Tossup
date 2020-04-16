import React from 'react';
import TopMenu from "../components/Navbar/navbar.js";
import Header from "../components/Header/header.js";
import Map from "../components/Map/map.js";
import WinnerTable from "../components/WinnerTable/winnertable.js";

function ElectionPage (){

    return(
        <main>
        <TopMenu />
        <Header />
        <Map />
        <WinnerTable />
        </main>
    );
    
}

export default ElectionPage;
