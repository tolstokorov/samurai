import React from "react";
import styles from './index.module.css';
import art from './art.jpg';
import MyPosts from './MyPosts';

const Profile = () => {
  return (
    <div className={ styles.profile }>
    
      <img className={ styles.art } src={ art } alt="art" draggable="false"/>

      <div>
        <center><p>ava + description</p></center> {/* tmp */}
        <MyPosts />
      </div>

    </div>
  );
}

export default Profile;
