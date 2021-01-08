import React from "react";
import { NavLink } from "react-router-dom";
import styles from './index.module.css';

const Item = (props) => {
  return (
    <li className={ styles.item }>
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
      <ol className={ styles.list }>
        { dialogs }
      </ol>
    </section>
  );
}

export default DialogsList;
