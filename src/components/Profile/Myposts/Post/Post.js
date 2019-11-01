import  React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.item}>
            <div className={s.ava}></div>
            {props.message}
            <div>
                Like: {props.like}
            </div>
        </div>
    )

}

export default Post;