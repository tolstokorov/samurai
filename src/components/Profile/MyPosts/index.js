import React from "react";
import styles from "./index.module.css";
import Post from "./Post";
import AddPost from "./AddPost";

// stub
  const postArr = [];
  
  for(let i = 1; i <= 5; ++i) {
    postArr.push({
      id: i,
      name: `User_${i}`,
      message: 'blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-\
      blah-blah-blah-blah-blah-blah-blah-blah',
      likesCount: 42
    });
  }
// end stub

const MyPosts = (props) => {
    return (
    <div className={ styles.rootWrapper }>
      <div className={ styles.title }>My posts</div>

      <div className={ styles.posts }>
        { postArr.map( (item) => <Post
         key={ item.id }
         id={ item.id}
         message={ item.message }
         likesCount={ item.likesCount }

         /> ) }
      </div>

      <AddPost />
    </div>
  );
}

export default MyPosts;
