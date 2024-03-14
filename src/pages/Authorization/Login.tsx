import React, {useEffect, useState} from 'react';
import s from "./Authorization.module.scss";
import { useNavigate } from "react-router-dom";
import {userAPI} from "../../services/UserService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setAccessToken, setUser} from "../../store/reducers/userSlice";
import toast from "react-hot-toast";


const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [alert, setAlert] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [loginUser, {data, error}] = userAPI.useLoginUserMutation()
    const {refetch, data:UserProfile} = userAPI.useProfileUserQuery()
    const {user, accessToken} = useAppSelector(state => state.auth)

    useEffect(() => {
        if(data && data.token){
            toast.success('Вы успешно вошли!')
            navigate('/profile')
            localStorage.setItem('token', data.token)
            dispatch(setAccessToken(data.token))
        }
    }, [data, dispatch]);

    useEffect(() => {
        if (accessToken) refetch()
    }, [accessToken]);
    useEffect(() => {
        if(error) {
            toast.error('Пользователь с таким email не найден!');
        }
    }, [error]);


    const btnLogin = async(e: React.FormEvent) => {
        e.preventDefault()
        try{
            if(email && password) {
                await loginUser({
                    email: email,
                    password: password
                })
            } else {
                toast.error('Заполните поля');
            }

        } catch (e) {
            console.log('e', e)
        }

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

