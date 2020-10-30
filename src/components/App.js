import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: new Date()
    };
  }

  updateClock() {
    this.setState = {
      clock: new Date()
    };
    //console.log("Hi");
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  componetWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.clock.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default App;
