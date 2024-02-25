import React from 'react';
import s from './Contact.module.scss'

const ContactsPage = () => {
    return (
        <div className={s.contact}>
            <div className='container'>
                <div className={s.contact__items}>
                    <div className={s.contact__info}>
                        <h1>Контактная информация</h1>
                        <p>Email: primer@gmail.com</p>
                        <p>Поставной Илья</p>
                        <p>Адрес: г. Оренбург, ул. Орская, 200а</p>
                        <p>Телефон: +7 999 999 9999</p>
                        <p>ИНН: 123456789100</p>
                    </div>
                    <div>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aade5a2763a7648f14692b657d858250ef527345cabc49960ce790b0380670343&amp;source=constructor"
                            width="548" height="482" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;