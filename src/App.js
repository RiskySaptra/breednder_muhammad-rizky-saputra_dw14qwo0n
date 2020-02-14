import React from "react";
import Landing from './page/Landing';
import Index from './page/Index';
import Profile from './page/Profile';
import EditProfile from './page/EditProfile';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/edit-profile">
            <EditProfile />
          </Route>
          <Route path="/index">
            <Index />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
