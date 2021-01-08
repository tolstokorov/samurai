import React from "react";
import styles from "./index.module.css";
import Post from "./Post";
import AddPost from "./AddPost";

const MyPosts = (props) => {

  const postElements =  props.posts.map( (item) => {
    return (
      <Post
        key={ item.id }
        id={ item.id}
        message={ item.message }
        likesCount={ item.likesCount }
      /> 
    );
  });

  return (
    <div className={ styles.rootWrapper }>
      <div className={ styles.title }>My posts</div>

      <div className={ styles.posts }>
        { postElements }
      </div>

      <AddPost />
    </div>
  );
}

export default MyPosts;
