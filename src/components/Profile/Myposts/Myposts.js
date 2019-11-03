import  React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../state";

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} like={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewTextActionCreator(text);
        props.dispatch(action);
    }

    return(
        <div className={s.posts}>
            <h3 className={s.postsTitle}>My Posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} name="" id="" cols="30" rows="10" value={props.newPostText}/>
            </div>
            <div className={s.btnWrapper}>
                <button className={s.btn} onClick={ addPost }>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;