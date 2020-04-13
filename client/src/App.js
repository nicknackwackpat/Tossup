import React from "react";
import TopMenu from "./components/Navbar/navbar.js";
import Jumbotron from "./components/Jumbotron/jumbotron.js"

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
    <Jumbotron />
    </div>

    // </BrowserRouter>
  );
}

export default App;
