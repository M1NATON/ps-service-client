// Login.js
import React, {useEffect, useState} from 'react';
import s from "./Authorization.module.scss";
import { useNavigate } from "react-router-dom";
import {userAPI} from "../../services/UserService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setAccessToken, setUser} from "../../store/reducers/userSlice";


const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [alert, setAlert] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [loginUser, {data}] = userAPI.useLoginUserMutation()
    const {refetch, data:UserProfile} = userAPI.useProfileUserQuery()
    const {user, accessToken} = useAppSelector(state => state.auth)

    useEffect(() => {
        if(data && data.token){
            localStorage.setItem('token', data.token)
            dispatch(setAccessToken(data.token))
        }
    }, [data, dispatch]);

    useEffect(() => {
        if (accessToken) refetch()
    }, [accessToken]);

    const btnLogin = async(e: React.FormEvent) => {
        e.preventDefault()
        await loginUser({
            email: email,
            password: password
        })
        navigate('/profile')
    }

    return (
        <div className={s.main__top}>
            <div className={'container'}>
                <div className={s.main}>
                    <h1 className={s.title}>Войти</h1>
                    <form>
                        <div className={s.input__list}>
                            <p>Email:</p>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={s.input__list}>
                            <p>Пароль:</p>
                            <input type="text" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <p>{alert}</p>
                        <button onClick={btnLogin}>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

