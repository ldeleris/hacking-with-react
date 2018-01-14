import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Unofficial Github Browser v0.1</h1>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
