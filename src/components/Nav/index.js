import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import styles from './index.module.css';

const ProfileNavLink = (props) => {
  return (
    <NavLink className={ props.isRoot ? styles.activeLink : null } activeClassName={ styles.activeLink } to='/profile' >Profile</NavLink>
  );
};

const Nav = () => {
  return (
    <div className={ styles.navInner }>

      <ul className={ styles.list } >
        <li>
          <Switch>
            <Route exact path='/' render={ () => <ProfileNavLink isRoot={ true } /> } />
            <Route path='*' render={ () => <ProfileNavLink /> }  />
          </Switch>
        </li>
        <li>
          <NavLink activeClassName={ styles.activeLink } to='/dialogs'>Messages</NavLink>
        </li>
        <li>
          <NavLink activeClassName={ styles.activeLink } to='/users'>Users</NavLink>
        </li>
        <li>
          <NavLink activeClassName={ styles.activeLink } to='/news'>News</NavLink>
        </li>
        <li>
          <NavLink activeClassName={ styles.activeLink } to='/music'>Music</NavLink>
        </li>
        <br/>
        <li>
          <NavLink activeClassName={ styles.activeLink } to='/settings'>Settings</NavLink>
        </li>
      </ul>
      
    </div>
  );
}

export default Nav;
