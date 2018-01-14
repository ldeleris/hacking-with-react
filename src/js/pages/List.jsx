import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class List extends React.Component {
  render() {
    return (
      <div>
        <p>You are here: <NavLink exact to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home </NavLink></p>
        <p>Please choose a repository from the list below.</p>
        <ul>
          <li><Link to="/detail/react">React</Link></li>
          <li><Link to="/detail/react-native">React Native</Link></li>
          <li><Link to="/detail/jest">Jest</Link></li>
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  children: PropTypes.object,
};

export default List;
