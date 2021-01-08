import React from "react";
import styles from './index.module.css';

const addPost = () => {
  return (
    <form className={ styles.form }>
      <div className={ styles.box }>
        <textarea className={ styles.textarea } name="" id=""></textarea>
        <button className={ styles.btn }>Add post</button>
      </div>
    </form>
  );
}

export default addPost;
