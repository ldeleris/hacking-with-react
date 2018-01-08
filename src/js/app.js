console.log('React is up and running!');

import React from "react";
import ReactDOM from "react-dom";

import Header from "./pages/Header"
import Detail from "./pages/Detail";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Detail message="This coming from props!" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);