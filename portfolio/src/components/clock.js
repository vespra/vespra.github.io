import React from "react";
import classNames from "classNames";

import styles from "../assets/stylesheets/components/clock.scss";


const Clock = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      data: new Date()
    });
  }

  render() {
    return (
      <div className="currentTime">
        <h3>{this.state.data.toLocaleTimeString()}</h3>
      </div>
    )
  }
};

export default Clock;
