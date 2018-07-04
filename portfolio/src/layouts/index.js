import React from "react";
import * as Ionicons from 'react-icons/lib/io'

import styles from "../assets/stylesheets/main.scss";
import LeftSidebar from "../components/left-sidebar.js";
/*export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    {children()}
  </div>
);
*/

export default ({ children }) => (
  <div className="main-container">
    <LeftSidebar></LeftSidebar>
    <div className="main-content">
      {children()}
    </div>
  </div>
);
