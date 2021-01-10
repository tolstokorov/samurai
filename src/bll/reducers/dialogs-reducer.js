const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_TMP_TEXT = 'SET-TMP-TEXT';

export const addMessage = (routeId) => ({
    type: ADD_MESSAGE,
    payload: {
        routeId
    }
});

export const setTmpText = (routeId, message) => ({
    type: SET_TMP_TEXT,
    payload: {
        routeId,
        message
    }
});
  

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return _addMessage(state, action.payload.routeId);
        case SET_TMP_TEXT:
            return _setTmpText(state, action.payload.routeId , action.payload.message);
    
        default:
            return state;
    }
};

const _addMessage = (state, routeId) => {
    if(state.messages[routeId].tmpText.trim()) {
        const newMessages = [ ...state.messages ];
        const newMessage = { ...newMessages[routeId] };
        const newMessagesInner = [ ...newMessage ];
        
        newMessagesInner.push({
            id: newMessagesInner.length,
            message: newMessage.tmpText,
            sender_id: state.owner.id
        });

        newMessage = {
            ...newMessages[routeId],
            newMessagesInner
        };
        newMessages = [
            ...newMessages,
            newMessage
        ]

        _setTmpText(state, routeId,'');
        return {
            ...state,
            messages: [
                ...newMessages,
            ]
        };
    }
    return state;
};

const _setTmpText = (state, routeId, message) => {
    const newMessages = { ...state.messages };
    const newMessage = { ...newMessages[routeId] };
    return {
        ...state,
        messages: {
            ...newMessages,
            newMessage: {
                ...newMessage,
                tmpText: message 
            }
        }
    };
};

export default dialogsReducer;