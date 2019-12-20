import React, { Component } from 'react';


export default class DigitalClicker extends Component {
  state = {timesClicked: 0}

  onButtonClick = (e) => {
    const increment = this.state.timesClicked + 1
    this.setState({timesClicked: increment})
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>{this.state.timesClicked}</button>
        <label>Times Clicked: </label>
      </div>
    );
  }

}
