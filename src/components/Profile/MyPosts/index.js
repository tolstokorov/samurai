import React from "react";
import styles from "./index.module.css";
import Post from "./Post";
import AddPost from "./AddPost";

const MyPosts = (props) => {
  // const postArr = [];
  // for(let i = 1; i <= 10; ++i) {
  //   postArr.push(<Post key={ i } n={ i } />);
  // }

  const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias autem asperiores illum delectus ducimus ratione illo dolor? Architecto, quae. Ex optio perferendis, id earum error sit? Optio id repudiandae neque!';

  return (
    <div className={ styles.rootWrapper }>
      <div className={ styles.title }>My posts</div>

      <div className={ styles.posts }>
        <Post key={ 1 } n={ 1 } message='test text 1' likesCount={ 42 }/> 
        <Post key={ 2 } n={ 2 } message={ `test text 2 ${lorem}` } likesCount={ 24 }/> 
      </div>

      <AddPost />
    </div>
  );
}

export default MyPosts;
