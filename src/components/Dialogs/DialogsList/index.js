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

// stub
  const dialogsData = [];
  
  for(let i = 1; i <= 5; ++i) {
    dialogsData.push({
      id: i,
      name: `User_${i}`
    });
  }
// end stub

const DialogsList = () => {
  return (
    <section className={ styles.dialogSection }>
      <div className={ styles.title }><NavLink to='/dialogs'>Dialogs</NavLink></div>
      <ol className={ styles.list }>
        { dialogsData.map(item => <Item key={ item.id } id={ item.id } name={ item.name }/>) }
      </ol>
    </section>
  );
}

export default DialogsList;
