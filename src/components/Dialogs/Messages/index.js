import React from "react";
import { Route, Switch } from "react-router-dom";
import AddMessage from "./AddMessage";
import styles from './index.module.css';

const Message = (props) => <li className={ props.itIsMe ? styles.myItem : styles.friendItem } >{ props.message }</li>;

const Messages = (props) => {

  const messageRouting = props.messages.map(route => {
    return (
      <Route key={ route.id } exact path={ `/dialogs/id${route.id}` } >
        <ul className={ styles.list } >
          { route.messages.map(item => <Message
          key={ item.id } message={ item.message } itIsMe={ item.sender_id === props.owner.id }/>) }
        </ul>
        <AddMessage
          routeId={ route.id }
          tmpText={ route.tmpText }
          dispatch={ props.dispatch }
        />
      </Route>
      
    );
  });

  return (
    <section className={ styles.messages }>
      <Switch>
        
        { messageRouting }
       

       {/* stub  */}
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
