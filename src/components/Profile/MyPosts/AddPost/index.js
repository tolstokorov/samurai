import React from "react";
import { addPost, setNewPostText } from "../../../../bll/store";
import styles from './index.module.css';

const AddPost = (props) => {

  const newPostArea = React.createRef();

  return (
    <form onSubmit={ e => e.preventDefault() } className={ styles.form }>
      <div className={ styles.box }>
        <textarea
          className={ styles.textarea }
          value={ props.newPostText }
          ref={ newPostArea }
          onChange={ () => props.dispatch(setNewPostText(newPostArea.current.value)) }
        ></textarea>
        <button
          className={ styles.btn }
          onClick={ () => props.dispatch(addPost()) }
        >Add post</button>
      </div>
    </form>
  );
}

export default AddPost;