import React from "react";
import Chance from 'chance';

class Arrays extends React.Component {
  constructor(props) {
    super(props);

    const people = [];

    for (let i = 0; i < 10; i++) {
      people.push({
        name: chance.first(),
        country: chance.country({ full: true })
      });
    }

    this.state = { people }; // same as { people: people }
  }

  render() {
    return (
      <ul>
        {this.state.people.map((person, index) => (
          <li key={index}>Hello, {person.name} from {person.country}!</li>
        ))}
      </ul>
    );
  }
}

export default Arrays;