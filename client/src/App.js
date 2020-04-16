import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import TopMenu from "./components/Navbar/navbar.js";
import Footer from "./components/Footer/footer.js";
// import Signup from "./components/Login/signup.js";

import CandidatePage from "./Pages/CandidatePage.js";
import ElectionPage from "./Pages/ElectionPage.js";
import LoginPage from "./Pages/LoginPage.js";
import ResultsPage from "./Pages/ResultsPage.js";

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
        API.login(username, password).then(response => {
          console.log(response);
          if (response.status === 200) {
            // update the state
            this.setState(
              {
                loggedIn: true,
                user: response.data.user
              },
              // () => sessionStorage.setItem("token", response.data.token)
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
            </Router>
          </div>
          )}
  {!this.state.loggedIn && (
        <Router>
          <Route exact path="/" component={() => 
          <LoginPage login={this.login} />}
          />
        </Router>
    )};
    <Footer />
    </div>
    )};
  };

export default App;
