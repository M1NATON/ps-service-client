import React from 'react';
import logo from '../assets/logo.png'
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className='footer__items'>
                    <div className='footer__left'>
                        <img src={logo} alt=""/>
                    </div>
                    <div className='footer__rigth'>
                        <nav>
                            <ul>
                                <li><Link to='/'>Главная</Link></li>
                                <li><Link to='/services'>Услуги</Link></li>
                                <li><Link to='/feedback'>Отзывы</Link></li>
                                <li><Link to='/about'>О компании</Link></li>
                                <li><Link to='/contacts'>Контакты</Link></li>
                            </ul>
                        </nav>
                        <p><a href="https://github.com/M1NATON">Разработчик: M1NATON</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;