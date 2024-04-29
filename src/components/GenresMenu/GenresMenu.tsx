import React from 'react'
import styles from "./GenresMenu.module.css"
function GenresMenu() {

    return (
        <div>
            <div className={styles.genresHeader}>
                <h1>Жанры</h1>
            </div>
            <div className={styles.genresList}>
                <div className={styles.genresEach}>
                    <p>Комедия</p>
                </div>
                <div className={styles.genresEach}>
                    <p>Комедия</p>
                </div>
                <div className={styles.genresEach}>
                    <p>Комедия</p>
                </div>
                <div className={styles.genresEach}>
                    <p>Комедия</p>
                </div>
                <div className={styles.genresEach}>
                    <p>Комедия</p>
                </div>
            </div>
        </div>
    )
}

export default GenresMenu