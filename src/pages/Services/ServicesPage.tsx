import React from 'react';
import {serviceAPI} from "../../services/ServiceService";
import s from './Services.module.scss'
import logo from '../../assets/logo.png'
import Image from "../../utils/Image";
import ServiceItem from "./ServiceItem";

const ServicesPage = () => {

    const {data: services, isLoading, error} = serviceAPI.useFetchAllServiceQuery()



    if(error) return <h1>Error</h1>
    return (
        <div className={s.main}>
            <div className="container">
                <h1 className={s.service__header}>Наши услуги</h1>
                {isLoading && <h1>Загркзка...</h1>}
                <div className={s.service__items}>
                    {services && services.map((item) => <ServiceItem service={item} key={item.service_id}/>)}

                </div>
            </div>

        </div>
    );
};

export default ServicesPage;