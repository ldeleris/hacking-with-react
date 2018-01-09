console.log('React is up and running!');

import React from "react";
import ReactDOM from "react-dom";

import Header from "./pages/Header"
import Detail from "./pages/Detail";
import Arrays from "./pages/Arrays";

const FunctionalTest = (props) => {
  return (
    <h2>{props.message}</h2>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FunctionalTest message="Hello from a functional component!" />
        <Detail message="This coming from props!" />
        <Arrays />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);