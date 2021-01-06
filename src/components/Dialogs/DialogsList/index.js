import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import styles from './index.module.css';

const Item = (props) => {
  return (
    <li className={ styles.item }>
      <NavLink exact
        activeClassName={ styles.activeLink }
        to={ `/dialogs/id${props.id}` }
      >User_{ props.id }</NavLink>
    </li>
  );
};

const itemArr = [];
for(let i = 1; i <= 3; ++i) {
  itemArr.push(<Item id={ i }/>);
}

function DialogsList() {
  return (
    <section className={ styles.dialogSection }>
      <div className={ styles.title }><NavLink to='/dialogs'>Dialogs</NavLink></div>
      <ol className={ styles.list }>
        { itemArr }
      </ol>
    </section>
  );
}

export default DialogsList;
