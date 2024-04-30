import filledStarIcon from "../../assets/icons/FilledStarIcon.svg"
import unFilledStarIcon from "../../assets/icons/UnfilledStarIcon.svg"
import styles from "./Rating.module.css"


interface RatingProps {
    rating: number;
    maxStars?: number;
}

function Rating({ rating, maxStars = 10 }: RatingProps) {
    const filledStars = Math.round(rating);
    const emptyStars = maxStars - filledStars;

    return (
        <div className={styles.ratingContainer}>
            {[...Array(filledStars)].map((_, index) => (
                <img src={filledStarIcon} key={index} />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <img src={unFilledStarIcon} key={index} />
            ))}
        </div>
    );
}

export default Rating;
