import  React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.item}>
            <NavLink to={path} activeClassName={s.active}>
                <div className={s.ava}></div>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;