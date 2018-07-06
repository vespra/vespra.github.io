import React from "react";
import classNames from "classNames";
import styles from "../assets/stylesheets/components/left-sidebar.scss";
//import * as FontAwesome from 'react-icons/lib/fa'
var FaAngleLeft = require('react-icons/lib/fa/angle-left');

import UserProfile from "../components/user-profile.js";

const LeftSidebar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  toggleMenu() {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  }

  render() {
    var sideBarClasses = classNames({
      "left-sidebar": true,
      "minimized": !this.state.showMenu
    })
    return (
      <div className= {sideBarClasses}>
        <div className="inner">
          <UserProfile showMenu={this.state.showMenu}></UserProfile>
        </div>
        <div className="toggle-button" onClick={this.toggleMenu.bind(this)}><FaAngleLeft /></div>
      </div>
   )
 }
};

export default LeftSidebar;
