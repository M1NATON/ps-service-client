import React from 'react';
import styles from './HomePage.module.scss'
import Slider from "react-slick";
// @ts-ignore
import slide1 from '../../assets/slider/slider1.png'
// @ts-ignore
import slide2 from '../../assets/slider/slider2.png'
import '../../index.scss'
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


    return (
        <div className='container'>
            <div >

                <div className={styles.slider__container}>
                    <Slider {...settings}>
                        <div className={styles.slider__item}>
                            <img className={styles.slider__img} src={slide1} alt=""/>
                        </div>
                        <div className={styles.slider__item}>
                            <img className={styles.slider__img} src={slide2} alt=""/>
                        </div>
                        <div className={styles.slider__item}>

                        </div>
                    </Slider>
                </div>
                <div className={styles.slider__item}>
                    g
                </div>
            </div>
        </div>
    );
};

export default HomePage;