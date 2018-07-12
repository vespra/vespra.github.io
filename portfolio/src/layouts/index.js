import React from "react";
import * as Ionicons from 'react-icons/lib/io'

import styles from "../assets/stylesheets/main.scss";
import LeftSidebar from "../components/left-sidebar.js";
import Clock from "../components/clock.js"
import CountdownTimer from "../components/countdown-timer.js"

export default ({ children }) => (
  <div className="main-container">
    <LeftSidebar></LeftSidebar>
    <div className="main-content">
      {children()}
      <CountdownTimer date='12-12-2019'></CountdownTimer>
      <Clock></Clock>
    </div>
  </div>
);
