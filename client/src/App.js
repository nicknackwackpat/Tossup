import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopMenu from "./components/Navbar/Navbar.js";
import Header from "./components/Header/Header.js";
import Map from "./components/Map/Map.js";
// import Signup from "./components/Login/Signup.js";
import Login from "./Pages/LoginPage.js";

 import CandidatePage from "./Pages/CandidatePage.js";
 import ElectionPage from "./Pages/ElectionPage.js";
 import LoginPage from "./Pages/LoginPage.js";
 import ProfilePage from "./Pages/ProfilePage.js";
 import ResultsPage from "./Pages/ResultsPage.js";
 import SignUpPage from "./Pages/SignUpPage.js";
// //import Navbar from "./components/Navbar/Navbar.js";

// // import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    // <BrowserRouter>
    <div>
    <TopMenu />
    <Header />
    <Map />
    {/* <Login /> */}
    </div>
  )}
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