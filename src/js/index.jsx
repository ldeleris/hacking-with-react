import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import routes from './routes.jsx';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    {routes}
  </Router >,
  document.getElementById('app'),
);
