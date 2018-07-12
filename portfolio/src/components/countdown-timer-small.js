import React, {PropTypes} from 'react';

import styles from "../assets/stylesheets/components/countdown-timer.scss";

const CountdownTimerSmall = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }
  }

  componentDidMount() {
    this.countdownID = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  stop() {
    clearInterval(this.countdownID);
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };

    // calculate time difference
    if (diff >= (365.25 * 86400)) { //365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) { // 60
      timeLeft.minutes = Math.floor(diff / 60);
      diff -= timeLeft.minutes * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;
    return (
      <div className="countdown-timer-small">
        <div className="backgroundImage"></div>
        <div className="info">
          <div className="countdown">
            <div>
              <p>{this.addLeadingZeros(countDown.days)}</p>
              <p>{countDown.days === 1 ? 'Day' : 'Days'}</p>
            </div>
            <div>
              <p>{this.addLeadingZeros(countDown.hours)}</p>
              <p>{countDown.hours === 1 ? 'Hour' : 'Hours'}</p>
            </div>
            <div>
              <p>{this.addLeadingZeros(countDown.minutes)}</p>
              <p>{countDown.minutes === 1 ? 'Minute' : 'Minutes'}</p>
            </div>
            <div>
              <p>{this.addLeadingZeros(countDown.sec)}</p>
              <p>{countDown.sec === 1 ? 'Second' : 'Seconds'}</p>
            </div>
          </div>
        </div>
        <div className="animated-clock-face"></div>
      </div>
    )
  }
};

CountdownTimerSmall.propTypes = {
  date: PropTypes.string.isRequired
};

CountdownTimerSmall.defaultProps = {
  date: new Date()
};

export default CountdownTimerSmall;
