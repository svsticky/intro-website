import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';

// Import components
// import Home from './components/Home.jsx';
// import Form from './components/Form.jsx';
// import MapPage from './components/usp-map/Map.jsx';
import Offline from './components/Offline.jsx';

// CSS framework
import 'fomantic-ui-css/semantic.min.css';

// Import static content
//import './assets/index.css';
import './assets/logo.svg';
import FormResult from './components/FormResult.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Offline} />
        </Switch>
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
