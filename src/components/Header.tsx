import React from 'react';
import logo from '../assets/logo.png'
import {Link} from "react-router-dom";
import '../index.scss'
const Header = () => {
    return (
        <div>
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
        </div>
    );
};

export default Header;