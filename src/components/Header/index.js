import React from "react";
import { NavLink } from "react-router-dom";
import styles from './index.module.css';
import logo from './katana.svg';

const Header = () => {
  return (
    <div className={ styles.headerInnerWrapper }>
      <div className={ styles.headerContent }>
        <NavLink to='/'>
          <img className={ styles.logo } src={ logo } alt="logo" draggable="false"/>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
