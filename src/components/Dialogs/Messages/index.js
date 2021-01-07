import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from './index.module.css';

const Message = (props) => <li className={ styles.item } >{ props.message }</li>;

  

// stub
  const itemArr = [];
  for(let i = 1; i <= 5; ++i) {
    const innerArr = [];
    
    for(let j = 1; j <= 3; ++j) {
      innerArr.push(
        <Message key={ j } message={ `Stub :) ${(Math.random() * 1e8)^0}` } />
      );
    }

    itemArr.push(
      <Route key={ i } exact path={ `/dialogs/id${i}` } >
        <ul className={ styles.list } >
          { innerArr }
        </ul>
      </Route>
    );
  }
// end stub

const Messages = (props) => {

  return (
    <section className={ styles.messages }>
      <Switch>
        
        { itemArr }
       
        <Route path='/dialogs' >
          <div style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20vmin'
          }}>
            <div>~</div>
          </div>
        </Route>

      </Switch>
    </section>
  );
}

export default Messages;
