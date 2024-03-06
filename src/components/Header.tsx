import React, {useContext, useEffect, useState} from 'react';
import logo from '../assets/logo.png'
import {Link, NavLink, useNavigate, useNavigationType} from "react-router-dom";
import '../index.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import HeaderBasket from "./HeaderBasket";
import Modal from "../components/modal/Modal";
import {ModalContext} from "../context/ModalContext";
import {logout} from "../store/reducers/userSlice";

const Header = () => {

    const {totalQuantity} = useAppSelector(state => state.basket)
    const {modal, open, close} = useContext(ModalContext)
    const [profileBlock, setProfileBlock] = useState<boolean>(false)
    const {user} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const btnProfileBlock = () => {
        return setProfileBlock(prev => !prev)
    }
    const btnProfileBlockLogout = async () => {
        await dispatch(logout())
        navigate('/')
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
                        <button onClick={() => open()}><ShoppingCartIcon/>
                            <div className={'header__count__product'}>{totalQuantity}</div>
                        </button>
                        <div className='header__auth__link'>
                            {user ? (<div>
                                    <button onClick={btnProfileBlock}>Профиль</button>
                                    {profileBlock && (<div className={'header__profile__block'}>
                                        <Link to={'profile'} onClick={() => setProfileBlock(false)}>История заказов</Link>
                                        <button onClick={btnProfileBlockLogout}>Выйти</button>
                                    </div>)}

                                </div>
                            ) : (
                                <div className={'header__auth__link'}>
                                <Link to={'login'}>Sig in</Link>
                                    <Link to={'registration'}>Sign up</Link>
                                </div>
                            )}

                        </div>
                        {modal && <Modal title={'Корзина'} onClose={() => close()}>
                            <HeaderBasket/>
                        </Modal>}


                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;