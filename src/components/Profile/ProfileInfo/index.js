import React from "react";
import styles from './index.module.css';
import art from './art.jpg';

const ProfileInfo = () => {
  return (
    <>
      <img className={ styles.art } src={ art } alt="art" draggable="false"/>

      <center><p>ava + description</p></center> {/* tmp */}
    </>
  );
}

export default ProfileInfo;
