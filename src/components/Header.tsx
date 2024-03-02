import React, {useContext, useEffect, useState} from 'react';
import logo from '../assets/logo.png'
import {Link, NavLink} from "react-router-dom";
import '../index.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useAppSelector} from "../hooks/redux";
import HeaderBasket from "./HeaderBasket";
import Modal from "../components/modal/Modal";
import {ModalContext} from "../context/ModalContext";

const Header = () => {

    const [basketModal, setBasketModal] = useState(false)
    const {totalQuantity} = useAppSelector(state => state.basket)
    const {modal, open, close} = useContext(ModalContext)

    const modalBtn = () => {
        if (!basketModal){
            setBasketModal(true)
        } else{
            setBasketModal(false)
        }
    }


    return (
        <div className='header__wrapper'>
            <div className='container'>
                <div className='header'>

                    <div>
                        <img src={logo} alt=""/>
                    </div>

                    <nav>
                        <ul>
                            <li><NavLink to='/'>Главная</NavLink></li>
                            <li><NavLink to='/services'>Услуги</NavLink></li>
                            <li><NavLink to='/feedback'>Отзывы</NavLink></li>
                            <li><NavLink to='/about'>О компании</NavLink></li>
                            <li><NavLink to='/faq'>FAQ</NavLink></li>
                            <li><NavLink to='/contacts'>Контакты</NavLink></li>
                        </ul>
                    </nav>

                    <div className='header__link'>
                        <button onClick={() => open()}><ShoppingCartIcon/> <div className={'header__count__product'}>{totalQuantity}</div></button>
                        <Link to={'profile'}>Профиль</Link>
                        {modal && <Modal title={'Корзина'} onClose={() => close()}>
                            <HeaderBasket/>
                        </Modal>}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;