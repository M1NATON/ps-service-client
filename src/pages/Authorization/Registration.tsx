import React, {useState} from 'react';
import s from './Authorization.module.scss'
import {userAPI} from "../../services/UserService";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import {Alert} from "@mui/material";

const Registration = () => {

    const [registrationUser, {data}] = userAPI.useRegistrationUserMutation()
    const [lastName, setLastName] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate();
    const [alert, setAlert] = useState<boolean>(false)
    const [alertText, setAlertText] = useState<string>('')
    const {user} = useAppSelector(state => state.auth)


    const alertClear = () => setTimeout(() => {
        setAlert(false)
    }, 2000)

    const registrationBtn = async (e: React.FormEvent) => {
        e.preventDefault()

        if (lastName && firstName && email && password) {
            await registrationUser({
                lastName: lastName,
                firstName: firstName,
                email: email,
                password: password
            })
            navigate('/login')
            setAlert(true)
            setAlertText('Вы успешно зарегистрировались')
            alertClear()
        } else{
            setAlert(true)
            setAlertText('Заполните поля')
            alertClear()
        }


    }

    return (

        <div className={s.main__top}>
            <div className={'container'}>
                <div className={s.main}>
                    <h1 className={s.title}>Зарегистрироваться</h1>

                    <form>
                        <div className={s.input__list}>
                            <p>Фамилия:</p>
                            <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className={s.input__list}>
                            <p>Имя:</p>
                            <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className={s.input__list}>
                            <p>Email:</p>
                            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className={s.input__list}>
                            <p>Пароль:</p>
                            <input type="text" onChange={(e) => setPassword(e.target.value)}/>
                        </div>


                        <button onClick={registrationBtn}>Заргегистрироваться</button>

                    </form>
                </div>
            </div>
            <div className={'header__alert__registration'}>
                {alert && (
                    <Alert variant="filled" severity={user ? 'success' : "warning"}>
                        {alertText}
                    </Alert>
                )}

            </div>
        </div>
    );
};

export default Registration;