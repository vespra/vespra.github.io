import React from "react";
import classNames from "classNames";
import styles from "../assets/stylesheets/components/user-profile.scss";

var FaMapMarker = require('react-icons/lib/fa/map-marker');

const UserProfile = class extends React.Component {
  constructor(props) {
    super(props);
    /*this.state = {
      showMenu: true
    }
    this.toggleMenu = this.toggleMenu.bind(this);*/
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    var userProfileClasses = classNames({
      "user-profile": true
    })
    return (
      <div className={userProfileClasses}>
        <div className={"user-background"}></div>
        <div className={"user-image"}>
          <img src="https://gravatar.com/avatar/de84db04b0c7b43efdc840391ffe56ff" />
        </div>
        <div className={"user-info"}>
          <p className={"user-name"}>Daniela Desira</p>
          <p className={"user-title"}>Front End Developer</p>
          <p className={"user-location"}>
            <FaMapMarker /> Malta
          </p>
        </div>
      </div>
   )
 }
};

export default UserProfile;
