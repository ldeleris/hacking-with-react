import React from "react";
import Chance from 'chance';

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: chance.first(),
      country: chance.country({ full: true })
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  buttonClicked() {
    console.log('Button was clicked!');
    const newState = {
      name: chance.first()
    };
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <p>This is JSX being converted to HTML!</p>
        <p>{this.props.message}</p>
        <p>Hello, {this.state.name}!</p>
        <p>You're from {this.state.country}.</p>
        <button onClick={this.buttonClicked.bind(this)}>Meet Someone New</button>
      </div>
    );
  }
}

export default Detail;