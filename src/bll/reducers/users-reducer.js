const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

export const follow = userId => ({
    type: FOLLOW, 
    payload: {
        userId
    }
});
export const unfollow = userId => ({
    type: UNFOLLOW, 
    payload: {
        userId
    }
});
export const setUsers = data => ({
    type: SET_USERS, 
    payload: {
        data
    }
});
export const setCurrentPage = pageNumber => ({
    type: SET_CURRENT_PAGE, 
    payload: {
        pageNumber
    }
});

const initialState = {
    users: [],
    
    pageSize: 2,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return _follow(state, action.payload.userId);
        case UNFOLLOW:
            return _unfollow(state, action.payload.userId);
        case SET_USERS:
            return _setUsers(state, action.payload.data);
        case SET_CURRENT_PAGE:
            return _setCurrentPage(state, action.payload.pageNumber);
        default:
            return state;
    }
};

const _follow = (state, userId) => _followUnfollow(state, userId);

const _unfollow = (state, userId) => _followUnfollow(state, userId);

const _followUnfollow = (state, userId) => ({
    ...state,
    users: state.users.map(user => {
        if(user.id === userId) {
            return {
                ...user,
                followed: !user.followed
            }
        }
        return user
    })
});

const _setUsers = (state, data) => ({
    ...state,
    users: [ ...data.items ],
    totalUsersCount: data.totalCount
});

const _setCurrentPage = (state, pageNumber) => ({
    ...state,
    currentPage: pageNumber
});


export default usersReducer;