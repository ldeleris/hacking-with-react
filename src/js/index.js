console.log('React is up and running!');

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
//import history from './pages/history';

import routes from './routes.js';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    {routes}
  </Router >,
  document.getElementById('app')
);
