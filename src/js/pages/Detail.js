import React from "react";
import Chance from 'chance';

class Detail extends React.Component {
  buttonClicked() {
    console.log('Button was clicked!');
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <p>This is JSX being converted to HTML!</p>
        <p>{this.props.message}</p>
        <p>Hello, {chance.first()}!</p>
        <p>You're from {chance.country({ full: true })}.</p>
        <button onClick={this.buttonClicked.bind(this)}>Meet Someone New</button>
      </div>
    );
  }
}

export default Detail;