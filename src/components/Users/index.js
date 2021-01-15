import React, { Component } from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, unfollow } from "../../bll/reducers/users-reducer";
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
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${
        this.props.pageSize}&page=${this.props.currentPage}`)
      .then(data => {
        this.props.setUsers(data.data);
      })
      .catch(error => alert('Users axios error1 \n' + error))
  }

  onPaginationItemClick = i => {
    this.props.setCurrentPage(i)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${
        this.props.pageSize}&page=${ i }`)
      .then(data => {
        this.props.setUsers(data.data);
      })
      .catch(error => alert('Users axios error1 \n' + error))
  };

  render() {
    const pagesCount = 5 || Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    const paginationItems = [];
    for(let i = 1; i <= pagesCount; ++i) {
      paginationItems.push(
      <li className={
          i === this.props.currentPage ? styles['pagination-item--active'] : null
         }
         onClick={() => { this.onPaginationItemClick(i) } } >{ i }</li>);
    }

    return (
      <div>
        <ul className={ styles['pagination-box'] }>
          { paginationItems }
        </ul>
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
  users: state.usersReducer.users,
  pageSize: state.usersReducer.pageSize,
  totalUsersCount: state.usersReducer.totalUsersCount,
  currentPage: state.usersReducer.currentPage
});

const mapDispatchToProps = dispatch => ({
  follow: userId => dispatch(follow(userId)),
  unfollow: userId => dispatch(unfollow(userId)),

  setUsers: users => dispatch(setUsers(users)),
  setCurrentPage: pageNumber => dispatch(setCurrentPage(pageNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
