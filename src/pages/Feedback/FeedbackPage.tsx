import React from 'react';
import styles from "./Feedback.module.scss";
import fullRating from "../../assets/f_webp/star-bg.png";
import nullRating from "../../assets/f_webp/star-contr.png";
import { feedbackAPI } from "../../services/FeedbackService";

const FeedbackPage = () => {
    const { data: feedback, error, isLoading } = feedbackAPI.useFetchAllFeedbackQuery();

    const renderRatingStars = (rating:number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        const totalStars = 5;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<img key={i} src={fullRating} alt="Full Star" />);
        }

        if (hasHalfStar) {
            stars.push(<img key={fullStars} src={nullRating} alt="Half Star" />);
        }

        const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<img key={fullStars + i + (hasHalfStar ? 1 : 0)} src={nullRating} alt="Empty Star" />);
        }

        return stars;
    };

    return (
        <div className='container'>
            <h1 className={styles.feedback__header}>Наши отзывы</h1>
            <div className={styles.feedback__items}>
                {feedback && feedback.map((item, idx) => (
                    <div className={styles.feedback__item} key={idx}>
                        <h4 className={styles.feedback__item__name}>{item.username}</h4>
                        <p className={styles.feedback__item__date}>{item.createdate.slice(2, 10)}</p>
                        <p className={styles.feedback__item__rating}>
                            {renderRatingStars(item.rating)}
                        </p>
                        <p className={styles.feedback__item__text}>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackPage;
