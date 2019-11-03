const ADD_POST = 'ADD_POST';
const UPDATE_TEXT_POST = 'UPDATE_TEXT_POST';
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
            ]
        }
    },
    getState(){
        return this._state;
    },
    reRender(){
    },
    _addPost(){
        let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._reRender(this._state);
    },
    _updatePostText(NewText){
        this._state.profilePage.newPostText = NewText;
        this._reRender(this._state);
    },
    subscribe(observer){
        this._reRender = observer;
    },
    dispatch(action){
        if (action.type === "ADD_POST"){
            this._addPost();
        } else if (action.type === "UPDATE_TEXT_POST"){
            this._updatePostText(action.NewText);
        }
    },
};



export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewTextActionCreator = (text) => {
    return {type : UPDATE_TEXT_POST,  NewText: text}
}


export default store;
