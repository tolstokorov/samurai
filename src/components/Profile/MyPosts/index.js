import React from "react";
import styles from "./index.module.css";
import Post from "./Post";
import AddPost from "./AddPost";
import { connect } from "react-redux";
import { addPost, setNewPostText } from "../../../bll/reducers/profile-reducer";

const MyPosts = (props) => {

  const postElements =  props.profilePage.posts.map( (item) => {
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
        newPostText={ props.newPostText }
        
        setNewPostText={ props.setNewPostText }
        addPost={ props.addPost }
        />
    </div>
  );
}

const mapStateToProps = state => ({
  newPostText: state.profileReducer.newPostText,
  profilePage: state.profileReducer
});

const mapDispatchToProps = dispatch => ({
  setNewPostText: (text) => dispatch(setNewPostText(text)),
  addPost: () => dispatch(addPost())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
