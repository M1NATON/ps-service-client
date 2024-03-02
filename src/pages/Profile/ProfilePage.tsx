import React from 'react';
import s from './Profile.module.scss'
import Registration from "../Authorization/Registration";
const ProfilePage = () => {
    return (
        <div className={s.main}>
            <h1 className={s.title}>Личныый кабинет</h1>
            <Registration/>
        </div>
    );
};

export default ProfilePage;