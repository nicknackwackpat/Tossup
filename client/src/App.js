import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopMenu from "./components/Navbar/navbar.js";
import Header from "./components/Header/header.js";
import Map from "./components/Map/map.js";
// import Signup from "./components/Login/signup.js";
import Login from "./Pages/LoginPage.js";

import ResultsPage from "./Pages/ResultsPage.js";
 import CandidatePage from "./Pages/CandidatePage.js";
 import ElectionPage from "./Pages/ElectionPage.js";
 import LoginPage from "./Pages/LoginPage.js";
 import ProfilePage from "./Pages/ProfilePage.js";
//  import ResultsPage from "./Pages/ResultsPage.js";
 import SignUpPage from "./Pages/SignUpPage.js";
// //import Navbar from "./components/Navbar/Navbar.js";

// // import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
function App() {
  return (
    // <BrowserRouter>
    <div>
    <ResultsPage />
    {/* <Map /> */}
    {/* <Login /> */}
    </div>
  )}
=======
// function App() {
//   return (
//     // <BrowserRouter>
//     <div>
//     <TopMenu />
//     <Header />
//     <Map />
//     {/* <Login /> */}
//     </div>
//   )}
>>>>>>> bceba61073ebe1ada50297a0da99a7334c22ad05
// // BrowserRouter instructions
// // The app will not render correctly until you setup a Route component.
// // Refer to the Basic Example documentation if you need to.
// // (https://reacttraining.com/react-router/web/example/basic)

 function App() {
     return (
       <Router>
        <div>
          <Switch>
              <Route exact path = "/CandidatePage"> 
              </Route>
              <Route exact path ="/ElectionPage">
                 <ElectionPage/>
              </Route>
              <Route exact path ="/">
                <LoginPage/>
              </Route >
              <Route exact path = "/ProfilePage">
                <ProfilePage/>
              </Route>
              <Route exact path = "/ResultsPage">
                <ResultsPage/>
              </Route>
              <Route exact path = "/SignUpPage">
                <SignUpPage/> 
             </Route> 
            </Switch>
          </div>
         </Router>
   );

   }
 
export default App;
