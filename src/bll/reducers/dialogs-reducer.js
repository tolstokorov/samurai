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

const initialState = {
    owner: {
        id: 42
    },
    dialogs: [
        {
            id: 0,
            name: 'Alexander'
        },
        {
            id: 1,
            name: 'James'
        },
        {
            id: 2,
            name: 'Daniel'
        }
    ],
    routers: [
        {
            tmpText: '',
            id: 0,
            messages: [
                {
                    id: 0,
                    message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    sender_id: 123456
                }
            ]
        },
        {
            tmpText: '',
            id: 1,
            messages: [
                {
                    id: 0,
                    message: 'Porro facere explicabo id illum tempore nobis nisi obcaecati voluptatibus quidem exercitationem amet labore',
                    sender_id: 43534534534
                },
                {
                    id: 1,
                    message: 'Ipsa minus natus quasi perspiciatis ipsam debitis nam.',
                    sender_id: 42
                }
            ]
        },
        {
            tmpText: '',
            id: 2,
            messages: [
                {
                    id: 0,
                    message: 'Dicta.',
                    sender_id: 26734232
                },
                {
                    id: 1,
                    message: 'Consectetur amet omnis delectus quia in!',
                    sender_id: 42
                },
                {
                    id: 2,
                    message: 'Maxime vel voluptates nemo, autem iusto alias nam?',
                    sender_id: 26734232
                }
            ]
        }
    ]
};

const dialogsReducer = (state = initialState, action) => {
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
    if(state.routers[routeId].tmpText.trim()) {
        const newRoute = { ...state.routers[routeId] };
        
        newRoute.messages.push({
            id: newRoute.messages.length,
            message: newRoute.tmpText,
            sender_id: state.owner.id
        });
        newRoute.tmpText = '';

        const newRoutes = [ ...state.routers ];
        newRoutes[routeId] = newRoute;
        
        return {
            ...state,
            routers: newRoutes           
        };
    }
    return state;
};

const _setTmpText = (state, routeId, message) => {
    const newRoute = { ...state.routers[routeId] };
    
    newRoute.tmpText = message;

    const newRoutes = [ ...state.routers ];
    newRoutes[routeId] = newRoute;

    return {
        ...state,
        routers: newRoutes
    };
};

export default dialogsReducer;