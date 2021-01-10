import React, { useState } from "react";
import styles from './index.module.css';

const AddMessage = (props) => {

  const messageArea = React.createRef();

  const [tmpText, setTmpText] = useState('Hi!');

  return (
    <form onSubmit={ e => e.preventDefault() } className={ styles.form } >
      <textarea
        ref={ messageArea }
        value={ tmpText }
        onChange={ () => setTmpText(messageArea.current.value) }
      ></textarea>
      <button
        onClick={ () => {
          setTmpText('');
          alert(`New message: \n${ tmpText }`);
        } }
      >Add message</button>
    </form>
  );
}

export default AddMessage;
