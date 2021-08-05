import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Register from './components/Register';
import MemberView from './components/MemberView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/register" component={Register}/>
            <Route path="/member/:id" component={MemberView}/>
          </Switch>
        </Router>
      </header>{" "}
    </div>
  );
}

export default App;
