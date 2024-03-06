import React, {useContext, useState} from 'react';
import {useDispatch} from "react-redux";
import {clearBasket, removeBasket} from "../store/reducers/basketSlice";
import {useAppSelector} from "../hooks/redux";
import {orderAPI} from "../services/OrderService";
import {ModalContext} from "../context/ModalContext";
import {Alert} from "@mui/material";

const HeaderBasket = () => {
    const {items: basket, totalPrice} = useAppSelector(state => state.basket)
    const {user} = useAppSelector(state => state.auth)
    const [createOrder, {data}] = orderAPI.useCreateOrderMutation()
    const [alert, setAlert] = useState<boolean>(false)
    const [alertText, setAlertText] = useState<string>('')
    const dispatch = useDispatch();
    const {close} = useContext(ModalContext)
    const removeProductBasket = (service_id: number, totalPrice: number) => {
        dispatch(removeBasket({service_id, totalPrice}))
    }

    const alertClear = () => setTimeout(() => {
        setAlert(false)
    }, 2000)
    const createOrderBtn = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = basket.map(item => ({
            service_id: item.service_id
        }))
        if (user) {
            await createOrder({
                userId: user.userId,
                totalCost: totalPrice,
                services: [...result]
            })
            dispatch(clearBasket())
            setAlert(true)
            setAlertText('Заказ успешно оформлен')
            alertClear()
        } else {
            setAlert(true)
            setAlertText('Войдите или зарегистрируйтесь что бы оформить заказ')
            alertClear()
        }
    }


    return (
        <div className={'header__basket__modal'}>
            {basket.length ? (
                <div className={'header__modal__lists'}>
                    {basket.map((item, idx) => (
                        <div key={idx} className={'header__modal__list'}>
                            <p>{item.title}</p>
                            <div>
                                <span>{item.price} руб.</span>
                                <button
                                    onClick={() => removeProductBasket(item.service_id, item.price)}
                                    className={'header__modal__btn__delete'}
                                >X
                                </button>
                            </div>
                        </div>
                    ))}
                    <p className={'total__price'}>Общая сумма заказа: {totalPrice}руб.</p>
                    <button className={'header__order__btn'} onClick={createOrderBtn}>Оформить заказ</button>
                </div>
            ) : (<h3>Добавьте товар</h3>)}
            <div className={'header__alert__basket'}>
                {alert && (
                    <Alert variant="filled" severity={user ? 'success' : "warning"}>
                        {alertText}
                    </Alert>
                )}

            </div>
        </div>
    );
};

export default HeaderBasket;