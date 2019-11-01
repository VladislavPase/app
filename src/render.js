import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updatePostText} from './state';

export let reRender = (state) => {
    ReactDOM.render(<App state={state} updatePost={updatePostText} addPost={addPost}/>, document.getElementById('root'));
}
