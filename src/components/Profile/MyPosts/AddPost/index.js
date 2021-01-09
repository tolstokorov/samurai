import React, { useState } from "react";
import styles from './index.module.css';

const AddPost = () => {

  const newPostArea = React.createRef();

  const [tmpText, setTmpText] = useState('I\'m come back home.');

  return (
    <form onSubmit={ e => e.preventDefault() } className={ styles.form }>
      <div className={ styles.box }>
        <textarea
          className={ styles.textarea }
          value={ tmpText }
          ref={ newPostArea }
          onChange={ () => {
            setTmpText(newPostArea.current.value);
          }}
        ></textarea>
        <button
          className={ styles.btn }
          onClick={ () => {
            setTmpText('');
            console.log(`My new post: \n${ tmpText }`);
          } }
        >Add post</button>
      </div>
    </form>
  );
}

export default AddPost;
