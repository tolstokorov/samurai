import React from "react";
import styles from './index.module.css';
import art from './art.jpg';

function Profile() {
  return (
    <div className={ styles.profile }>
    
      <img className={ styles.art } src={ art } alt="art" draggable="false"/>

      <center>
        <div>ava + description</div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </center>

    </div>
  );
}

export default Profile;
