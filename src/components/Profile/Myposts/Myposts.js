import  React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} like={p.likesCount}/>)
    return(
        <div className={s.posts}>
            <h3 className={s.postsTitle}>My Posts</h3>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={s.btnWrapper}>
                <button className={s.btn}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;