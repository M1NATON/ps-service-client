import React, {useEffect} from 'react';
import s from './Profile.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {logout} from "../../store/reducers/userSlice";
import {orderAPI} from "../../services/OrderService";
import serviceItem from "pages/Services/ServiceItem";
const ProfilePage = () => {

    const {user} = useAppSelector(state => state.auth)
    const {data: order, error} = orderAPI.useFetchOrdersUserQuery(user?.userId)

    if (error) return <h1>Ошибка</h1>
    return (
        <div className={s.main}>
            <div className="container">
                <h1 className={s.title}>Личныый кабинет</h1>
                <iframe
                        src="https://open.spotify.com/embed/track/09w8NWGkVQKOWjFhuQBNIV?utm_source=generator"
                        width="100%" height="352" frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
                <div className={s.order__list}>
                    <h1 className={s.order__list__title}>История заказов:</h1>
                    {
                        order && order.length ? order.map((order, idx) => (
                            <div className={s.order__block}>
                                <div className={s.order__number}>
                                    Номер заказа: {order.order_id}
                                </div>

                                <div className={s.order__service}>
                                    <p>Услуги:</p>
                                    <ul>
                                        {
                                            order.service_titles.map((item, idx) => (
                                                <li>{item} {order.service_prices[idx]}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className={s.order__total__price}>
                                    <p>Общая сумма: {order.total_order_cost}руб.</p>
                                </div>
                            </div>
                        ))
                            : (<div className={s.order__null}>
                                <h1>У вас нет заказов</h1>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;