import React from 'react';
import {IService} from "model/IService";
import {Link} from "react-router-dom";
import s from './Services.module.scss'
import Image from "../../utils/Image";
import styles from "pages/Home/HomePage.module.scss";

interface Props {
    service: IService
}


const ServiceItem = ({service}: Props) => {

    return (
        <div className={s.service__item} key={service.service_id}>
            <Link to={`/services/${service.service_id}`}>
                <Image filename={service.image}/>
                <div className={s.service__back}></div>
                <div className={s.service__box}></div>
                <div className={s.service__text}>
                    <h3>{service.title}</h3>
                    <p>{service.price} руб.</p>
                </div>
            </Link>
        </div>

    );
};

export default ServiceItem;