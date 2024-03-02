import React, {useEffect, useState} from 'react';
import {serviceAPI} from "../../services/ServiceService";
import {Link, useParams} from "react-router-dom";
import s from './ServiceItemPage.module.scss';
import Image from "../../utils/Image";
import {useDispatch, useSelector} from "react-redux";
import {addBasket} from "../../store/reducers/basketSlice";
import {useAppSelector} from "../../hooks/redux";

const ServiceItemPage = () => {
    const [arr, setArr] = useState<{ service_id: number }[]>([{service_id: 1}]);
    const {service_id} = useParams<{ service_id: string }>();
    const [check, setCheck] = useState(false)
    const basket = useAppSelector(state => state.basket)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('Updated basket:', basket);
    // }, [basket]);

    if (!service_id) return <h1>ERROR</h1>;
    const {data: service, isLoading, error} = serviceAPI.useFetchOneServiceQuery(service_id);

    if (error) return <h1>error</h1>;
    if (isLoading) return <h1>isLoading</h1>;
    if (!service) return <h1>Пусто</h1>;

    const testBtn = (title: string, service_id: number, price: number) => {
        dispatch(addBasket({title: title, service_id: service_id, price: price }));
        setCheck(true)
    };



    return (
        <div className={s.main}>
            <div className="container">
                <div className={s.service__container}>
                    <div className={s.service__img}>
                        <Image filename={service.image}/>
                    </div>
                    <div className={s.service__info}>
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                        <p>Стоимость услуги: {service.price} рублей.</p>

                        {
                            check ? (<button disabled={true}>Товар добавлен</button>)
                                : (<button
                                    onClick={() => service.service_id && testBtn(service.title, service.service_id, Number(service.price))}>Добавить
                                    в корзину</button>)
                        }


                    </div>
                </div>
                <Link to='/services' className='btn'>Назад</Link>
            </div>
        </div>
    );
};

export default ServiceItemPage;
