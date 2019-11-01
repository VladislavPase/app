import React from 'react';
import s from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
    return(
        <div className={s.infoBlock}>
            <div className={s.imageBox}/>
            <div className={s.desctiptionWrapper}>
                <div className={s.ava}>ava</div>
                <div className={s.infoBox}>
                    <div className={s.name}>Tony Tony</div>
                    <div className={s.item}>
                        <div className={s.itemTitle}>Birthday</div>
                        <div className={s.subitem}>04.04.90</div></div>
                    <div className={s.item}><div className={s.itemTitle}>City</div><div className={s.subitem}>New York, USA</div></div>
                    <div className={s.item}><div className={s.itemTitle}>Hobbies</div><div className={s.subitem}>HTML5, CSS3, JS, React JS</div></div>
                    <div className={s.photosWrapper}>
                        <div className={s.photosTitle}>Photos:</div>
                        <div className={s.gallery}>
                            <div className={s.galleryItem}>1</div>
                            <div className={s.galleryItem}>2</div>
                            <div className={s.galleryItem}>3</div>
                            <div className={s.galleryItem}>4</div>
                            <div className={s.galleryItem}>5</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo