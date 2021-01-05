import React from "react";
import styles from './index.module.css';
import default_ava from './default_ava.png';

function Post(props) {
  return (
    <div className={ styles.post }>
      <img className={ styles.avatar } src={ default_ava } alt="avatar"/>
      <div className={ styles.body }>
        <span>Post №{ props.n }</span> <span className={ styles.likeBox }><button>Like</button><span>{ props.likesCount }</span></span>

        <p>{ props.message }</p>
        
      </div>
    </div>
  );
}

export default Post;
