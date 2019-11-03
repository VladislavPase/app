const ADD_POST = 'ADD_POST';
const UPDATE_TEXT_POST = 'UPDATE_TEXT_POST';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE'


let store = {
    _state : {
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
            ],
            newMessageText : '',
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('State changed');
    },
    _addPost(){
        let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updatePostText(NewText){
        this._state.profilePage.newPostText = NewText;
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if (action.type === "ADD_POST"){
            this._addPost();
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE_TEXT_POST"){
            this._updatePostText(action.NewText);
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_MESSAGE_TEXT'){
            this._state.dialogsPage.newMessageText = action.messageText;
            this._callSubscriber(this._state);
        }else if (action.type === 'SEND_MESSAGE'){
            let messageText = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messages.push({id: 4, message: messageText});
            this._callSubscriber(this._state);
        }
    },
};



export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewTextActionCreator = (text) => {
    return {type : UPDATE_TEXT_POST,  NewText: text}
}

export const sendMessageCreator = () => {
    return {type : SEND_MESSAGE}
}

export const updateNewMessageText = (messageText) => {
    return {type : UPDATE_MESSAGE_TEXT,  messageText: messageText}
}



export default store;
