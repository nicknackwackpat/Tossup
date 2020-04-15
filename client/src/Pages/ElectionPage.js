import React from 'react';
import TopMenu from "../components/Navbar/navbar.js";
import Header from "../components/Header/header.js";
import Map from "../components/Map/map.js"

function ElectionPage (){

    return(
        <main>
        <TopMenu />
        <Header />
        <Map />
        </main>
    );
    
}

export default ElectionPage;
