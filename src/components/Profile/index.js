import React from "react";
import styles from './index.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div className={ styles.profile }>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  );
}

export default Profile;
