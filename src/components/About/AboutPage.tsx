import React from 'react';
import s from './AboutPage.module.scss'
import Slider from "react-slick";
import item1 from '../../assets/f_webp/pordtfolio.jpg'
import item2 from '../../assets/f_webp/pordtfolio1.jpg'
import item3 from '../../assets/f_webp/pordtfolio2.jpg'
import item4 from '../../assets/f_webp/pordtfolio3.jpg'
import item5 from '../../assets/f_webp/pordtfolio4.jpg'
import item6 from '../../assets/f_webp/pordtfolio5.jpg'
const AboutPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className={s.about}>
            <div className='container'>
                <h1>О компании</h1>
                <p>Наша компания предоставляет высококачественные услуги по
                    компьютерной помощи, рассчитанные на
                    различные потребности наших клиентов. Мы стремимся к обеспечению безопасности и эффективности работы
                    вашего компьютера, предлагая ппрофессиональное решение для всех ваших потребностей в компьютерной
                    поддержке. Наша команда состоит из опытных специалистов, готовых помочь вам с любыми проблемами и
                    запросами.</p>
                <p>Мы гарантируем индивидуальный подход к каждому клиенту, сохраняя
                    конфиденциальность и профессионализм
                    в нашей работе. Наша цель - обеспечить вас высококачественными услугами, удовлетворить ваши
                    потребности и преодолеть ожидания.</p>

                <div className={s.about__items}>
                    <div className={s.about__item}>
                        <p>Инновационные решения</p>
                        <p>Современные и эффективные подходы к решению проблем.</p>
                    </div>

                    <div className={s.about__item}>
                        <p>Экспертность в области</p>
                        <p>Глубокие знания и опыт, обеспечивающие качественное обслуживание.</p>
                    </div>

                    <div className={s.about__item}>
                        <p>Доступность и отзывчивость</p>
                        <p>Гибкий график работы и оперативная поддержка клиентов.</p>
                    </div>
                </div>

                <h1>Портфолио</h1>
                <div className="slider-container">
                    <Slider {...settings} autoplay={true}>
                        <div>
                            <div className={s.about__slider__img}>
                                <img src={item1} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className={s.about__slider__img}>
                                <img src={item2} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className={s.about__slider__img}>
                                <img src={item3} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className={s.about__slider__img}>
                                <img src={item4} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className={s.about__slider__img}>
                                <img src={item5} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className={s.about__slider__img}>
                                <img src={item6} alt=""/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;