const state = {
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

export default state;

export const addPost = () => {
    const newPost = {
        id: state.profilePage.posts.length,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    setNewPostText('');
};

export const setNewPostText = (text) => {
    state.profilePage.newPostText = text;
};
