class Store {
    _state = {
        owner: {
            id: 42
        },
        profilePage: {
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
        },
        dialogsPage: {
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
            messages: [
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
        }
    };

    setState = () => this._state;

    subscriber = (observer) => {
        this._render = observer;
    };

    dispatch = (action) => {
        switch (action.type) {
            case 'ADD-POST':
                this._addPost();
                break;
            case 'SET-NEW-POST-TEXT':
                this._setNewPostText(action.payload.text);
                break;
            case 'ADD-MESSAGE':
                this._addMessage(action.payload.routeId);
                break;
            case 'SET-TMP-TEXT':
                this._setTmpText(action.payload.routeId, action.payload.message);
                break;
        
            default:
                break;
        }
    };

    _addPost = () => {
        if(this._state.profilePage.newPostText.trim()) {
            const newPost = {
                id: this._state.profilePage.posts.length,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._setNewPostText('');
        
            this._render();
        }
    };
    _setNewPostText = (text) => {
        this._state.profilePage.newPostText = text;
    
        this._render();
    };

    _addMessage = (routeId) => {
        if(this._state.dialogsPage.messages[routeId].tmpText.trim()) {
            this._state.dialogsPage.messages[routeId].messages.push({
                id: this._state.dialogsPage.messages[routeId].messages.length,
                message: this._state.dialogsPage.messages[routeId].tmpText,
                sender_id: this._state.owner.id
            });
            this._setTmpText(routeId,'');
        
            this._render();
        }
    };
    _setTmpText = (routeId, message) => {
        this._state.dialogsPage.messages[routeId].tmpText = message;
    
        this._render();
    };
};
const store = new Store();
export default store;
