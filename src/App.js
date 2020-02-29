import React from "react";
import Landing from './page/Landing';
import Index from './page/Index';
import Profile from './page/Profile';

import { connect } from "react-redux";

import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";

import { getAuth } from "./_actions/auth";

class App extends React.Component {
  componentDidMount() {
    this.props.autoAuth();
  }
  render() {
    // console.log("aut", this.props.authenticated);
    const { authenticated } = this.props;
    return (
      <Router>
        {!authenticated ? (
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Redirect to="/" />{" "}
          </Switch>
        ) : (
          <Switch>
            <Route path="/index">
              <Index />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Redirect to="/index" />{" "}
          </Switch>
        )}
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoAuth: () => dispatch(getAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
