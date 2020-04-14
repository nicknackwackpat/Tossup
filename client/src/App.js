import React from 'react';
import TopMenu from "./components/Navbar/navbar.js";
import Carousel from "./components/Carousel/Carousel.js"
// import Header from "./components/Header/Header.js"
import Map from "./components/Map/Map.js";
import Candidate from './components/candidateSelect/candidate.js';
// import Candidate from "./components/candidateSelect";


// import { BrowserRouter, Route, Switch } from "react-router-dom";

// BrowserRouter instructions
// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)

function App() {
  return (
    // <BrowserRouter>
    <div>
    <TopMenu />
    <Carousel />
    <Map />
    <Candidate />
    </div>

    // </BrowserRouter>
  );
}

export default App;
