import React from 'react';
// @ts-ignore
import logo from '../assets/logo.png'
import {NavLink} from "react-router-dom";
import '../index.scss'
const Header = () => {
    return (
        <div className='header__wrapper'>
            <div className='container'>
                <div className='header'>

                    <div>
                        <img src={logo} alt=""/>
                    </div>

                    <nav>
                        <ul>
                            <li><NavLink to='/' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>Главная</NavLink></li>
                            <li><NavLink to='/services'>Услуги</NavLink></li>
                            <li><NavLink to='/feedback'>Отзывы</NavLink></li>
                            <li><NavLink to='/about'>О компании</NavLink></li>
                            <li><NavLink to='/faq'>FAQ</NavLink></li>
                            <li><NavLink to='/contacts'>Контакты</NavLink></li>
                        </ul>
                    </nav>

                    <div className='header__link'>
                        <a href="#">Профиль</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;