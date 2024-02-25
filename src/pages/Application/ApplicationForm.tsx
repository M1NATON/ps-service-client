import React, {useState} from 'react';
import s from './Application.module.scss'
import {InputMask} from "primereact/inputmask";

const ApplicationForm = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [check, setCheck] = useState(false)
    const [checkText, setCheckText] = useState('')


    const clearCheck = (check:boolean, checkText: string) => {
        setName('')
        setNumber('')
        setEmail('')
        setCheck(check)
        setCheckText(checkText)
        const clear = setTimeout(() => {
            setCheck(false)
            setCheckText('')
        }, 2000)
    }

    const btnForm = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (!name || !number || !email) {
                clearCheck(true, 'Введите данные')
            } else {
                const applicationData = {
                    name: name,
                    number: number,
                    email: email
                }
                console.log('applicationData', applicationData)
                clearCheck(true, 'Успешно')
            }
        } catch (e) {
            clearCheck(true, 'Ошибка')
        }
    }

    // @ts-ignore
    return (
        <div className={s.form__background}>
            <div className="container">
                <div className={s.form}>
                    <div className={s.form__text}>
                        <h1>Узнать цену</h1>
                        <p>Оставте свои контакты и мы вам перезвоним</p>
                    </div>
                    <div className={s.form__r}>
                        <form action="">
                            <div className={s.form__item}>
                                <p>Имя</p>
                                <input
                                    type="text"
                                    placeholder='Имя'
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}

                                />
                            </div>
                            <div className={s.form__item}>
                                <p>Телефон</p>
                                <InputMask
                                    type='text'
                                    mask='8 (999) 999 99 99'
                                    placeholder='8 (___) ___-__-__'
                                    //@ts-ignore
                                    onChange={(e) => setNumber(e.target.value)}
                                    value={number}
                                />
                            </div>
                            <div className={s.form__item}>
                                <p>Email</p>
                                <input
                                    type="text"
                                    placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}

                                />
                            </div>
                            <div className={s.form__check}>
                                {check && <p>{checkText}</p>}
                            </div>
                            <div className={s.form__btn}>
                                <button onClick={btnForm}>Отправить заявку</button>
                                <p>Отправляя данную форму вы соглашаетесь с политикой конфиденциальности</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;