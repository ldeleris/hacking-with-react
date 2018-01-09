console.log('React is up and running!');

import React from "react";
import ReactDOM from "react-dom";

import Detail from "./pages/Detail";

class App extends React.Component {
  render() {
    return (
      <div>
        <Detail message="This coming from props!" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);