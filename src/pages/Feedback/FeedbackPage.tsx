import React from 'react';
import styles from "./Feedback.module.scss";
import fullRating from "../../assets/f_webp/star-bg.png";
import nullRating from "../../assets/f_webp/star-contr.png";

const FeedbackPage = () => {
    return (
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
    );
};

export default FeedbackPage;