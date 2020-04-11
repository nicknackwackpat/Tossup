import React from "react";
import Navbar from "./components/Navbar/navbar.js";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    // <BrowserRouter>
    <div>
    <Navbar />
    </div>

    // </BrowserRouter>
  );
}

export default App;
