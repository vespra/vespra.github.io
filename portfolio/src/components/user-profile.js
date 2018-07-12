import React from "react";
import classNames from "classNames";
import styles from "../assets/stylesheets/components/user-profile.scss";

var FaMapMarker = require('react-icons/lib/fa/map-marker');

const user =  {
  name: 'Daniela Desira',
  title: 'Front End Developer',
  location: 'Malta',
  image: 'https://gravatar.com/avatar/de84db04b0c7b43efdc840391ffe56ff'
};

const UserProfile = class extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    var userProfileClasses = classNames({
      "user-profile": true,
      "minimized": !this.props.showMenu
    })
    return (
      <div className={userProfileClasses}>
        <div className={"user-background"}></div>
        <div className={"user-image"}>
          <img src={user.image} />
        </div>
        <div className={"user-info"}>
          <p className={"user-name"}>{user.name}</p>
          <p className={"user-title"}>{user.title}</p>
          <p className={"user-location"}><FaMapMarker />{user.location}</p>
        </div>
      </div>
   )
 }
};

export default UserProfile;
