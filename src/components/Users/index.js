import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow } from "../../bll/reducers/users-reducer";
import styles from './index.module.css';
import default_ava from '../../share/default_ava.png';

const User = (props) => (
<div className={ styles.user }>
  <img className={ styles.avatar } src={ props.avatarURL || default_ava } alt="avatar"/>
  <button onClick={ () => {
      if (props.followed) {
        props.unfollow(props.id)
      } else {
        props.follow(props.id)
      }
    } }>{ props.followed ? 'UNFOLLOW' : 'FOLLOW' }</button>
  <div className={ styles.body }>
    <div>ID: { props.id }</div>

    <div>{ props.fullName }</div>

    <div>
      <div>{ props.location.country }</div>
      <div>{ props.location.city }</div>
    </div>
  </div>
</div>);

const Users = (props) => {
  const tmp = <pre>
    { JSON.stringify(props.users, null, 4) }
  </pre>;

  return (
    <div>
      {tmp}
      <hr/>
      { props.users.map(user => <User 
        key={ user.id }
        { ...user }
        follow={ props.follow }
        unfollow={ props.unfollow }
      />) }
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.usersReducer.users
});

const mapDispatchToProps = dispatch => ({
  follow: userId => dispatch(follow(userId)),
  unfollow: userId => dispatch(unfollow(userId)),
  setUsers: users => dispatch(setUsers(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
