import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import TopMenu from "./components/Navbar/navbar.js";
import Footer from "./components/Footer/footer.js";
// import Signup from "./components/Login/signup.js";
import API from "./utils/API";

import CandidatePage from "./Pages/CandidatePage.js";
import ElectionPage from "./Pages/ElectionPage.js";
import LoginPage from "./Pages/LoginPage.js";
import ResultsPage from "./Pages/ResultsPage.js";
// import Axios from "axios";
// import { render } from "react-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      user: null,
      // email: "",
      // password: "",
    };
  }

  componentDidMount() {
    API.getUser()
      .then((response) => {
      console.log(response.data);
      if (!!response.data.user) {
        this.setState({
          loggedIn: true,
          // user: response.data.user,
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null,
        });
      }
    }).catch(err => console.log(err));
  }

  logout = (event) => {
    event.preventDefault();
    this.setState(
      {
        loggedIn: false,
        user: null,
      },
      () => sessionStorage.removeItem("token")
    );
  };

  login = (e, email, password) => {
    console.log("login clicked");
    e.preventDefault();
    API.login(email, password).then((response) => {
      console.log(response);
      if (response.status === 200) {
        // update the state
        this.setState(
          {
            loggedIn: true,
            user: response.data.user,
          }
          // () => sessionStorage.setItem("token", response.data.token)
        );
      }
    }).catch(err => this.setState({loggedIn : true}));
  };

  // handleInputChange = event => {
  //   event.preventDefault();
  //   // Updating the input's state
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  render() {
    return (
      <div className="App">
        {this.state.loggedIn && (
          <div>
            {/* <TopMenu user={this.state.user} logout={this.logout} /> */}
            <Router>
{/* SETS THE HOME PAGE TO CANDIDATEPAGE WHEN USER IS LOGGED IN  */}
        <Route
                exact
                path="/"
                component={() => <CandidatePage user={this.state.user} />}
              />
              <Route
                exact
                path="/election"
                component={() => <ElectionPage user={this.state.user} />}
              />
              <Route
                exact
                path="/results"
                component={() => <ResultsPage user={this.state.user} />}
              />
            </Router>
          </div>
        )}
        {!this.state.loggedIn && (
          <Router>
            <Route
              exact
              path="/"
              component={() => <LoginPage handleInputChange={this.handleInputChange} login={this.login} email={this.state.email} password={this.state.password} 
              
              />}
            />
          </Router>
        )};
        <Footer /> 
      </div>
    );
  }
}

export default App;
