import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';

// Import components
import Home from './components/Home.jsx';
import MapPage from './components/usp-map/Map.jsx';

// Import static content
import './assets/index.css';
import './assets/logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route path="/map" component={MapPage} />
            <Route component={Home} />
          </Switch>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();