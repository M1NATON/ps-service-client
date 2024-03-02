import React from 'react';
import {useDispatch} from "react-redux";
import {removeBasket} from "../store/reducers/basketSlice";
import {useAppSelector} from "../hooks/redux";

const HeaderBasket = () => {
    const {items: basket} = useAppSelector(state => state.basket)
    const dispatch = useDispatch();
    const removeProductBasket = (service_id: number) => {
        dispatch(removeBasket(service_id))
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
                                    onClick={() => removeProductBasket(item.service_id)}
                                    className={'header__modal__btn__delete'}
                                >X
                                </button>
                            </div>
                        </div>
                    ))}
                    <button className={'header__order__btn'}>Оформить заказ</button>
                </div>
            ) : (<h3>Добавьте товар</h3>)}
        </div>
    );
};

export default HeaderBasket;