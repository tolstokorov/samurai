import React from "react";
import styles from './index.module.css';
import logo from './katana.svg';

function Header() {
  return (
    <div className={ styles.headerInnerWrapper }>
      <div className={ styles.headerContent }>
        <img className={ styles.logo } src={ logo } alt="logo" draggable="false"/>
      </div>
    </div>
  );
}

export default Header;
