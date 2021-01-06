import React from "react";
import { Link } from "react-router-dom";
import styles from './index.module.css';
import logo from './katana.svg';

function Header() {
  return (
    <div className={ styles.headerInnerWrapper }>
      <div className={ styles.headerContent }>
        <Link to='/'>
          <img className={ styles.logo } src={ logo } alt="logo" draggable="false"/>
        </Link>
      </div>
    </div>
  );
}

export default Header;
