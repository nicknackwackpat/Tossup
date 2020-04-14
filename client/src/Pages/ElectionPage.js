import React from 'react';
import TopMenu from "../components/Navbar/Navbar.js";
import Header from "../components/Header/Header.js";
import Map from "../components/Map/Map.js"

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
