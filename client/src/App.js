import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopMenu from "./components/Navbar/navbar.js";
import Header from "./components/Header/header.js";
import Map from "./components/Map/map.js";
// import Signup from "./components/Login/signup.js";
import Login from "./Pages/LoginPage.js";

import CandidatePage from "./Pages/CandidatePage.js";
 import ElectionPage from "./Pages/ElectionPage.js";
 import LoginPage from "./Pages/LoginPage.js";
 import ProfilePage from "./Pages/ProfilePage.js";
 import ResultsPage from "./Pages/ResultsPage.js";

// // import { BrowserRouter, Route, Switch } from "react-router-dom";
// function App() {
//   return (
//     // <BrowserRouter>
//     <div>
//     {/* <TopMenu /> */}
//     {/* <Header /> */}
//     {/* <Map /> */}
//     <Login />
//     </div>
//   )}


// // BrowserRouter instructions
// // The app will not render correctly until you setup a Route component.
// // Refer to the Basic Example documentation if you need to.
// // (https://reacttraining.com/react-router/web/example/basic)

class App extends Component {
    constructor() {
        super();
    
        this.state = {
          loggedIn: false,
          user: null
        };
      }

      componentDidMount() {
        const token = sessionStorage.getItem("token");
        AUTH.getUser({ token: token }).then(response => {
          console.log(response.data);
          if (!!response.data.user) {
            this.setState({
              loggedIn: true,
              user: response.data.user
            });
          } else {
            this.setState({
              loggedIn: false,
              user: null
            });
          }
        });
      }
      logout = event => {
        event.preventDefault();
        this.setState(
          {
            loggedIn: false,
            user: null
          },
          () => sessionStorage.removeItem("token")
        );
      };

      login = (username, password) => {
        AUTH.login(username, password).then(response => {
          console.log(response);
          if (response.status === 200) {
            // update the state
            this.setState(
              {
                loggedIn: true,
                user: response.data.user
              },
              () => sessionStorage.setItem("token", response.data.token)
            );
          }
        });
      };

render() {      
    return (
       <div className="App">
         {this.state.loggedIn && (
           <div>
             <TopMenu user={this.state.user} logout={this.logout} />
      <Router>
          <Switch>
{/* SETS THE HOME PAGE TO CANDIDATEPAGE WHEN USER IS LOGGED IN */}
          <Route exact path = "/" component={() => 
            <CandidatePage user={this.state.user} />}
              />
          <Route exact path ="/election" component={() =>
            <ElectionPage user={this.state.user} />} 
              />
          <Route exact path = "/results" component={() =>
            <ResultsPage user={this.state.user} />} 
              />
            </Switch>
            </Router>
          </div>
          )}
        </div>
    )      
  {!this.state.loggedIn && (
        <div>
        <Route exact path="/" component={() => 
          <LoginPage login={this.login} />}
          />
      </div>
      )};
    };
        }
export default App;
