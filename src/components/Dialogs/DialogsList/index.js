import React from "react";
import { NavLink } from "react-router-dom";
import styles from './index.module.css';
import default_ava from '../../../share/default_ava.png';

const Item = (props) => {
  return (
    <li className={ styles.item }>
      <img className={ styles.avatar } src={ default_ava } alt="avatar"/>
      <NavLink exact
        activeClassName={ styles.activeLink }
        to={ `/dialogs/id${props.id}` }
      >{ props.name }</NavLink>
    </li>
  );
};

const DialogsList = (props) => {

  const dialogs = props.dialogs.map(item => <Item key={ item.id } id={ item.id } name={ item.name }/>);

  return (
    <section className={ styles.dialogSection }>
      <div className={ styles.title }><NavLink to='/dialogs'>Dialogs</NavLink></div>
      <ul className={ styles.list }>
        { dialogs }
      </ul>
    </section>
  );
}

export default DialogsList;
