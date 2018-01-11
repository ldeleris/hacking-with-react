import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import App from './pages/App';
import List from './pages/List';
import Detail from './pages/Detail';

const routes = (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/" component={List} />
    <Route path="/detail/:repo" component={Detail} />
  </div>
);

export default routes;