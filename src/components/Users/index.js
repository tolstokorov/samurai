import React, { Component } from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow } from "../../bll/reducers/users-reducer";
import styles from './index.module.css';
import default_ava from '../../share/default_ava.png';
import axios from "axios";

const User = (props) => (
<div className={ styles.user }>
  <img className={ styles.avatar } src={ props.photos.large || props.photos.small || default_ava } alt="avatar"/>
  <button onClick={ () => {
      if (props.followed) {
        props.unfollow(props.id)
      } else {
        props.follow(props.id)
      }
    } }>{ props.followed ? 'UNFOLLOW' : 'FOLLOW' }</button>
  <div className={ styles.body }>
  
    <div>name: { props.name }</div>
    <div>id: { props.id }</div>
    <div>uniqueUrlName: { props.uniqueUrlName }</div>
    <div>status: { props.status }</div>
  </div>
</div>);

class Users extends Component {
  componentDidMount(){
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(data => {
        this.props.setUsers(data.data.items);
      })
      .catch(error => alert('Users axios error: \n' + error))
  }

  // const tmp = <pre>
  //   { JSON.stringify(this.props.users, null, 4) }
  // </pre>;

  render() {
    return (
      <div>
        {/* { tmp } <hr/> */}
        { this.props.users?.map(user => <User 
          key={ user.id }
          { ...user }
          follow={ this.props.follow }
          unfollow={ this.props.unfollow }
        />) }
      </div>
    )
  };
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
