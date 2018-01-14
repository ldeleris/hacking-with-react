import React from 'react';
import ajax from 'superagent';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }

  componentWillMount() {
    ajax.get(`https://api.github.com/users/${this.props.match.params.user}/events`)
      .end((error, response) => {
        if (!error && response) {
          this.setState({ events: response.body });
        } else {
          console.log('Error fetching data.', error);
        }
      });
  }

  render() {
    return (<div>
      <p>You are here:&nbsp;
        <NavLink exact to="/" activeClassName="active">Home </NavLink>
        > {this.props.match.params.user}
      </p>
      <ul>
        {this.state.events.map((event, index) => {
          const eventType = event.type;
          const reposName = event.repo.name;
          const creationDate = event.created_at;

          return (
            <li key={index}>
              <strong>{reposName}</strong>: {eventType}
              at {creationDate}.
            </li>
          );
        })}
      </ul>
    </div>);
  }
}

User.propTypes = {
  children: PropTypes.object,
};

export default User;
