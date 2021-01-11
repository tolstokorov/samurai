const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

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
export const setUsers = () => ({
    type: SET_USERS, 
    payload: {}
});

const initialState = {
    users: [
        {
            avatarURL: null,
            id: 0,
            followed: true, 
            fullName: 'Test-fullName',
            status: 'Test-status',
            location: {
                country: 'Test-location-country',
                city: 'Test-location-city'
            }
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return _follow(state, action.payload.userId);
        case UNFOLLOW:
            return _unfollow(state, action.payload.userId);
        case SET_USERS:
            return _setUsers(state, action.payload.users);
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

const _setUsers = (state, newUsers) => ({
    ...state,
    users: [ ...state.users, ...newUsers ]
});


export default usersReducer;