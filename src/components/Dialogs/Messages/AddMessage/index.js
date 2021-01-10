import React from "react";
import styles from './index.module.css';

const AddMessage = (props) => {

  const messageArea = React.createRef();

  return (
    <form onSubmit={ e => e.preventDefault() } className={ styles.form } >
      <textarea
        ref={ messageArea }
        value={ props.tmpText }
        onChange={ () => props.dispatch({
          type: 'SET-TMP-TEXT',
          payload: {
            routeId: props.routeId,
            message: messageArea.current.value
          }
        }) }
      ></textarea>
      <button
        onClick={ () => {
          props.dispatch({
            type: 'ADD-MESSAGE',
            payload: {
              routeId: props.routeId
            }
          });
        } }
      >Add message</button>
    </form>
  );
}

export default AddMessage;
