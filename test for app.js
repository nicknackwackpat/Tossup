import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AUTH from "./utils/AUTH";

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
            <div className="main-view">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <Books user={this.state.user} />}
                />
                <Route
                  exact
                  path="/books"
                  component={() => <Books user={this.state.user} />}
                />
                <Route exact path="/books/:id" component={Detail} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        )}
        {!this.state.loggedIn && (
          <div className="auth-wrapper" style={{ paddingTop: 40 }}>
            <Route
              exact
              path="/"
              component={() => <LoginForm login={this.login} />}
            />
            <Route
              exact
              path="/books"
              component={() => <LoginForm user={this.login} />}
            />
            <Route exact path="/signup" component={SignupForm} />
          </div>
        )}
      </div>
    );
  }
}

export default App;