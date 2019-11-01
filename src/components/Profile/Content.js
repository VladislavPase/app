import React from 'react';
import s from './Content.module.css'
import MyPosts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Content = (props) => {
    return(
        <div className={s.contentItems}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updatePost={props.updatePost}
            />
        </div>
    )
}

export default Content;