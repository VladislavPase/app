import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";


function Sidebar() {
    return(
        <div className="nav">
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Home</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </div>
    )
}

export default Sidebar;