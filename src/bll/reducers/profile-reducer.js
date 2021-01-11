const ADD_POST = 'ADD-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';

export const addPost = () => ({ type: ADD_POST });

export const setNewPostText = (text) => ({
    type: SET_NEW_POST_TEXT,
    payload: {
        text
    }
});

const initialState = {
    newPostText: '', 
    posts: [
        {
            id: 0,
            message: 'blah-blah-blah-blah-blah-blah-blah',
            likesCount: 24
        },
        {
            id: 1,
            message: 'blah-blah-blah',
            likesCount: 42
        },
        {
            id: 2,
            message: 'blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah',
            likesCount: 0
        }
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return _addPost(state);
        case SET_NEW_POST_TEXT:
            return _setNewPostText(state, action.payload.text);
    
        default:
            return state;
    }
};

const _addPost = (state) => {
    if(state.newPostText.trim()) {
        return {
            ...state,
            newPostText: '',
            posts: [
                ...state.posts,
                {
                    id: state.posts.length,
                    message: state.newPostText,
                    likesCount: 0
                }
            ]
        };
    }
    return state;
};

const _setNewPostText = (state, text) => ({
    ...state,
    newPostText: text
});

export default profileReducer;