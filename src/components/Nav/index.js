import React from "react";
import { Link } from "react-router-dom";
import styles from './index.module.css';

function Nav() {
  return (
    <div className={ styles.navInner }>

      <ul className={ styles.list } >
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/dialogs'>Messages</Link>
        </li>
        <li>
          <Link to='/stub'>News</Link>
        </li>
        <li>
          <Link to='/stub'>Music</Link>
        </li>
        <br/>
        <li>
          <Link to='/stub'>Settings</Link>
        </li>
      </ul>
      
    </div>
  );
}

export default Nav;
