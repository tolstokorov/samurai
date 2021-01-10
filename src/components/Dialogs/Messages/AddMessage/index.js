import React from "react";
import { addMessage, setTmpText } from "../../../../bll/store";
import styles from './index.module.css';

const AddMessage = (props) => {

  const messageArea = React.createRef();

  return (
    <form onSubmit={ e => e.preventDefault() } className={ styles.form } >
      <textarea
        ref={ messageArea }
        value={ props.tmpText }
        onChange={ () => props.dispatch(setTmpText(props.routeId, messageArea.current.value)) }
      ></textarea>
      <button
        onClick={ () => {
          props.dispatch(addMessage(props.routeId));
        } }
      >Add message</button>
    </form>
  );
}

export default AddMessage;
