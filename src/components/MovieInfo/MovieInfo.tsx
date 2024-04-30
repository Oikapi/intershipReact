import React from 'react'
import styles from "./MovieInfo.module.css"
// import FantasyLogo from "../../assets/icons/SuspenseIcon.svg?react"
import fantasyIcon from "../../assets/icons/FantasyIcon.svg"
import Rating from '../Rating/Rating';
import { Country, Genre } from '../../сommonTypes';
import GenresIcon from '../GenresIcon/GenresIconList';
import GenresIconList from '../GenresIcon/GenresIconList';

type MovieInfoProps = {
    description: string | undefined,
    rating: number | undefined,
    countries: Country[] | undefined,
    genres: Genre[] | undefined,
    movieLength: number | undefined,
}

function MovieInfo({ description, rating, countries, genres, movieLength }: MovieInfoProps) {
    return (
        <div className={styles.movieInfo}>
            <div className={styles.movieInfoLeft}>
                <div className={styles.movieInfoRetelling}>
                    <p>
                        {description}
                    </p>
                </div>
                <div className={styles.movieInfoMainInfo}>
                </div>
            </div>
            <div className={styles.movieInfoRight}>
                <GenresIconList genres={genres} movieLength={movieLength} />
                <div className={styles.movieInfoRating}>
                    <h3>
                        Рейтинг
                    </h3>
                    <Rating rating={Math.round(rating || 0)} />
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;         