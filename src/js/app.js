console.log('React is up and running!');

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/createHashHistory';


import Detail from "./pages/Detail";
import createHashHistory from "history/createHashHistory";

class App extends React.Component {
  render() {
    return (
      <Router history={createHistory({ queryKey: false })}
        onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={Detail} />
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);