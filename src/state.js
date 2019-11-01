import {reRender} from "./render";

let state = {
    profilePage: {
        posts : [
            {id: 1, message: "Hi, how are you?👌", likesCount: 16},
            {id: 2, message: "it's my first post!!!😊😊😊", likesCount: 20},
            {id: 3, message: "Hello", likesCount: 1},
            {id: 4, message: "Fine", likesCount: 2}
        ],
        newPostText : 'Input your text here..'
    },
    dialogsPage: {
        dialogs : [
            {id: 1, name: "Dima"},
            {id: 2, name: "Sveta"},
            {id: 3, name: "Misha"},
            {id: 4, name: "Valera"},
            {id: 5, name: "Katya"}
        ],
        messages : [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Nice"}
        ]
    }
}
export let addPost = () => {
    let newPost = {id: 5, message: state.profilePage.newPostText, likesCount: 0};
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = '';
    reRender(state);
}

export let updatePostText = (NewText) => {
    state.profilePage.newPostText = NewText;
        reRender(state);
}

export default state;
