import React from "react";
//import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Example from "./components/loginpage.js";
// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
      <div>
        <Example />
      </div>
    </BrowserRouter>
  );
}

export default App;
