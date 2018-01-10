console.log('React is up and running!');

import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  IndexRoute
} from 'react-router-dom';
//import history from './pages/history';

import App from './pages/App.js'
import Detail from "./pages/Detail";
import List from "./pages/List";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={List} />
      <Route path="/detail/:repo" component={Detail} />
    </div>
  </Router >,
  document.getElementById('app')
);
