import React, { Component } from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";

import Signin from "./Auth/Signin";
import Signup from "./Auth/SignUp";
import Profile from "./Screens/Aboutsc";
import Home from "./Screens/Homesc";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <main
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fdfdfd",
            }}
          >
            <Switch>
              <Route path="/Signin" component={Signin} />
              <Route path="/Signup" component={Signup} />
              <Route path="/Profile" component={Profile} />
              <Route path="/home" component={Home} />
              <Redirect to="/Signin" />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
