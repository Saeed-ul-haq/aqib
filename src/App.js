import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Redirect to='/register' /> */}
          <Route path="/login" exact><Login /></Route>
          <Route path="/register" exact   ><Register /></Route>
          <Route path="/dashboard" exact ><Dashboard /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
