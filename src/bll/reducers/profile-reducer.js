const ADD_POST = 'ADD-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';

export const addPost = () => ({ type: ADD_POST });

export const setNewPostText = (text) => ({
    type: SET_NEW_POST_TEXT,
    payload: {
        text
    }
});

const profileReducer = (state, action) => {
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
        const newPost = {
            id: state.posts.length,
            message: state.newPostText,
            likesCount: 0
        };
        const newPosts = { ...state.posts };
        newPosts.push(newPost);
        _setNewPostText(state, '');
        return {
            ...state,
            posts: newPosts
        };
    }
    return state;
};

const _setNewPostText = (state, text) => ({
    ...state,
    newPostText: text
});

export default profileReducer;