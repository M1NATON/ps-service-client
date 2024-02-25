import React from 'react';
import {serviceAPI} from "../../services/ServiceService";
import {Link, useParams} from "react-router-dom";
import s from './ServiceItemPage.module.scss'
import Image from "../../utils/Image";

const ServiceItemPage = () => {

    const {service_id} = useParams<{ service_id: string }>()

    if (!service_id) return <h1>ERROR</h1>
    const {data: service, isLoading, error} = serviceAPI.useFetchOneServiceQuery(service_id)

    if(error) return <h1>error</h1>
    if(isLoading) return <h1>isLoading</h1>
    if (!service) return <h1>Пусто</h1>
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
                        <button>Добавить в корзину</button>
                    </div>
                </div>
                <Link to='/services' className='btn'>Назад</Link>
            </div>
        </div>
    );
};

export default ServiceItemPage;