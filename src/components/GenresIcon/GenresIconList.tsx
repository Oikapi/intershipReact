import React from 'react'
import styles from "./GenresIcon.module.css"
import durationIcon from "../../assets/icons/DurationIcon.svg"
import fantasyIcon from "../../assets/icons/FantasyIcon.svg"
import comedyIcon from "../../assets/icons/ComedyIcon.svg"
import dramaIcon from "../../assets/icons/DramaIcon.svg"
import { Genre } from '../../сommonTypes';

const genreToIcon: Record<string, string> = {
    "фантастика": fantasyIcon,
    "комедия": comedyIcon,
    "драма": dramaIcon

};
type GenresIconProps = {
    genres: Genre[] | undefined,
    movieLength: number | undefined
}

function GenresIconList({ genres, movieLength }: GenresIconProps) {
    return (
        <div className={styles.genresIconList}>
            {
                genres?.map((genre) =>
                    <div className={styles.genresIcon}>
                        <img src={genreToIcon[genre.name || "фантастика"]} />
                        <p>{genre.name}</p>
                    </div>
                )
            }
            {
                movieLength &&
                <div className={styles.genresIcon}>
                    <img src={durationIcon} />
                    <p>{movieLength}</p>
                </div>
            }

        </div>
    )
}

export default GenresIconList