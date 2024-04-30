import React from 'react'
import styles from "./MovieTitle.module.css"
import jpeg from "../../assets/tempMovie.jpg"

function MovieTitle() {
    return (
        <div className={styles.movieTitle}
            style={{
                backgroundImage: `url(${jpeg})`
            }}
        >
            <h1>Начало 2022 </h1>
            <p>Сериал</p>
        </div>
    )
}

export default MovieTitle