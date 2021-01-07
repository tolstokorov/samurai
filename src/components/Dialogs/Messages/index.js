import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from './index.module.css';

const Message = (props) => <li className={ styles.item } >{ props.message }</li>;

// stub
  const messagesData = [];

  const messagesTmpArr = [];
  for(let i = 1; i <= 3; ++i) {
    messagesTmpArr.push({
      id: i,
      message: `Stub :) ${(Math.random() * 1e8)^0}`
    });
  }

  for(let i = 1; i <= 5; ++i) {
    messagesData.push(
      {
        id: i,
        messages: messagesTmpArr
      }
    );
  }
// end stub

const Messages = (props) => {

  return (
    <section className={ styles.messages }>
      <Switch>
        
        { messagesData.map(route => {
          return (
            <Route key={ route.id } exact path={ `/dialogs/id${route.id}` } >
              <ul className={ styles.list } >
                { route.messages.map(item => <Message
                key={ route.messages.id } message={ route.messages.message } />) }
              </ul>
            </Route>
          );
        }) }
       
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
