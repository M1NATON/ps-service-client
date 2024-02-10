import React from 'react';
// @ts-ignore
import logo from '../assets/logo.png'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div>
                    <img src={logo} alt=""/>
                </div>

                <nav>
                    <ul>
                        <li><Link to='/'>Главная</Link></li>
                        <li><Link to='/services'>Услуги</Link></li>
                        <li><Link to='/feedback'>Отзывы</Link></li>
                        <li><Link to='/about'>О компании</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/contacts'>Контакты</Link></li>
                    </ul>
                </nav>

                <div className='header__link'>
                    <a href="#">Узнать цену</a>
                </div>
            </div>
        </div>
    );
};

export default Header;