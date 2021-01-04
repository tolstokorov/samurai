import React from "react";
import styles from './index.module.css';

function Nav() {
  return (
    <>
      <ul className={ styles.list } >
        <li>
          <a href="#tmp">Profile</a>
        </li>
        <li>
          <a href="#tmp">Messages</a>
        </li>
        <li>
          <a href="#tmp">News</a>
        </li>
        <li>
          <a href="#tmp">Music</a>
        </li>
        <br/>
        <li>
          <a href="#tmp">Settings</a>
        </li>
      </ul>
    </>
  );
}

export default Nav;
