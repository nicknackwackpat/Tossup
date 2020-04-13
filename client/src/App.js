import React from "react";
import TopMenu from "./components/Navbar/navbar.js";
import Header from "./components/Header/Header.js";
import Map from "./components/Map/map.js";

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
    <Header />
    <Map />
    </div>

    // </BrowserRouter>
  );
}

export default App;
