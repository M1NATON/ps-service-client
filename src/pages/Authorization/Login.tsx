import React from 'react';
import s from "./Authorization.module.scss";

const Login = () => {
    return (
        <div className={s.main__top}>
            <div className={'container'}>
                <div className={s.main}>
                    <h1 className={s.title}>Войти</h1>

                    <form>
                        <div className={s.input__list}>
                            <p>Email:</p>
                            <input type="text"/>
                        </div>
                        <div className={s.input__list}>
                            <p>Пароль:</p>
                            <input type="text"/>
                        </div>


                        <button>Войти</button>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;