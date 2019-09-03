import React, { Component } from "react";

class Time extends Component {
  render() {
    const { time } = this.props;
    return <div className="time text-right">{time}</div>;
  }
}

export default Time;
