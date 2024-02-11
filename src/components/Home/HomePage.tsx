import React from 'react';
import styles from './HomePage.module.scss'
import Slider from "react-slick";
import slide1 from '../../assets/slider/slider1.png'
import slide2 from '../../assets/slider/slider2.png'
import slide3 from '../../assets/slider/slider3.png'
import item from '../../assets/f_webp/lawyer-product14.jpg'
import fullRating from '../../assets/f_webp/star-bg.png'
import nullRating from '../../assets/f_webp/star-contr.png'
import '../../index.scss'
import ApplicationForm from "../Application/ApplicationForm";

const HomePage = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const settingsMulti = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div >
            <div className={styles.home__background}>
                <div className='container'>
                    <div>
                        <div className={styles.slider__container}>
                            <Slider {...settings}>
                                <div className={styles.slider__item}>
                                    <img className={styles.slider__img} src={slide1} alt=""/>
                                    <div className={styles.slider__text}>
                                        <h1>Чистка от пыли - скидка до 15%*</h1>
                                        <p>Скидка действует до 30.02.2004.</p>
                                    </div>
                                </div>
                                <div className={styles.slider__item}>
                                    <img className={styles.slider__img} src={slide2} alt=""/>
                                    <div className={styles.slider__text}>
                                        <h1>Установка офиса - скидка до 10%*</h1>
                                        <p>Скидка действует при первом обращении.</p>
                                    </div>
                                </div>
                                <div className={styles.slider__item}>
                                    <img className={styles.slider__img} src={slide3} alt=""/>
                                    <div className={styles.slider__text}>
                                        <h1>Услуга по установке драйверов в подарок*</h1>
                                        <p>Подарок действует только с услугой сборка ПК.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.service__container}>

                    <h1 className={styles.service__header}>Наши услуги</h1>

                    <div className={styles.service__items}>

                        <div className={styles.service__item}>
                            <img src={item} alt=""/>
                            <div className={styles.service__back}></div>
                            <div className={styles.service__box}></div>
                            <div className={styles.service__text}>
                                <h3>Установка WINDOWS</h3>
                                <p>1000р</p>
                            </div>
                        </div>


                        <div className={styles.service__item}>
                            <img src={item} alt=""/>
                            <div className={styles.service__back}></div>
                            <div className={styles.service__box}></div>
                            <div className={styles.service__text}>
                                <h3>Установка WINDOWS</h3>
                                <p>1000р</p>
                            </div>
                        </div>


                        <div className={styles.service__item}>
                            <img src={item} alt=""/>
                            <div className={styles.service__back}></div>
                            <div className={styles.service__box}></div>
                            <div className={styles.service__text}>
                                <h3>Установка WINDOWS</h3>
                                <p>1000р</p>
                            </div>
                        </div>


                        <div className={styles.service__item}>
                            <img src={item} alt=""/>
                            <div className={styles.service__back}></div>
                            <div className={styles.service__box}></div>
                            <div className={styles.service__text}>
                                <h3>Установка WINDOWS</h3>
                                <p>1000р</p>
                            </div>
                        </div>


                        <div className={styles.service__item}>
                            <img src={item} alt=""/>
                            <div className={styles.service__back}></div>
                            <div className={styles.service__box}></div>
                            <div className={styles.service__text}>
                                <h3>Установка WINDOWS</h3>
                                <p>1000р</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.feedback__background}>
                <div className="container">
                    <h1>Отзывы</h1>

                    <div className="slider-container">
                        <Slider {...settingsMulti} >
                            <div>
                                <div className={styles.feedback__item}>
                                    <h4 className={styles.feedback__item__name}>Ярослав Борисов</h4>
                                    <p className={styles.feedback__item__date}>03.06.2023</p>
                                    <p className={styles.feedback__item__rating}>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={nullRating} alt=""/>
                                    </p>
                                    <p className={styles.feedback__item__text}>
                                        Обратился для установки Windows. Работа выполнена быстро и профессионально.
                                        Очень
                                        доволен!
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className={styles.feedback__item}>
                                    <h4 className={styles.feedback__item__name}>Ярослав Борисов</h4>
                                    <p className={styles.feedback__item__date}>03.06.2023</p>
                                    <p className={styles.feedback__item__rating}>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={nullRating} alt=""/>
                                    </p>
                                    <p className={styles.feedback__item__text}>
                                        Обратился для установки Windows. Работа выполнена быстро и профессионально.
                                        Очень
                                        доволен!
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.feedback__item}>
                                    <h4 className={styles.feedback__item__name}>Ярослав Борисов</h4>
                                    <p className={styles.feedback__item__date}>03.06.2023</p>
                                    <p className={styles.feedback__item__rating}>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={nullRating} alt=""/>
                                    </p>
                                    <p className={styles.feedback__item__text}>
                                        Обратился для установки Windows. Работа выполнена быстро и профессионально.
                                        Очень
                                        доволен!
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.feedback__item}>
                                    <h4 className={styles.feedback__item__name}>Ярослав Борисов</h4>
                                    <p className={styles.feedback__item__date}>03.06.2023</p>
                                    <p className={styles.feedback__item__rating}>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={nullRating} alt=""/>
                                    </p>
                                    <p className={styles.feedback__item__text}>
                                        Обратился для установки Windows. Работа выполнена быстро и профессионально.
                                        Очень
                                        доволен!
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.feedback__item}>
                                    <h4 className={styles.feedback__item__name}>Ярослав Борисов</h4>
                                    <p className={styles.feedback__item__date}>03.06.2023</p>
                                    <p className={styles.feedback__item__rating}>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={nullRating} alt=""/>
                                    </p>
                                    <p className={styles.feedback__item__text}>
                                        Обратился для установки Windows. Работа выполнена быстро и профессионально.
                                        Очень
                                        доволен!
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.feedback__item}>
                                    <h4 className={styles.feedback__item__name}>Ярослав Борисов</h4>
                                    <p className={styles.feedback__item__date}>03.06.2023</p>
                                    <p className={styles.feedback__item__rating}>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={fullRating} alt=""/>
                                        <img src={nullRating} alt=""/>
                                    </p>
                                    <p className={styles.feedback__item__text}>
                                        Обратился для установки Windows. Работа выполнена быстро и профессионально.
                                        Очень
                                        доволен!
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <ApplicationForm/>
        </div>
    );
};

export default HomePage;