import React from "react";
import styles from "./index.module.css";
import Post from "./Post";
import AddPost from "./AddPost";

const MyPosts = (props) => {

  const postElements =  props.state.posts.map( (item) => {
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

      <AddPost
        newPostText={ props.state.newPostText }
        setNewPostText={ props.setNewPostText }
        addPost={ props.addPost } />
    </div>
  );
}

export default MyPosts;
