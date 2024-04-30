import React from 'react'
import styles from "./MovieInfo.module.css"
// import FantasyLogo from "../../assets/icons/SuspenseIcon.svg?react"
import fantasyIcon from "../../assets/icons/FantasyIcon.svg"
import Rating from '../Rating/Rating';

function MovieInfo() {
    return (
        <div className={styles.movieInfo}>
            <div className={styles.movieInfoLeft}>
                <div className={styles.movieInfoRetelling}>
                    <p>
                        Во время автокатастрофы одна из пассажирок автобуса — студентка колледжа Ли Шицин — должна погибнуть, однако замкнувшаяся временная петля вновь и вновь возвращает ее к начальной точке событий. Пытаясь спастись, она случайно затягивает в этот повторяющийся цикл своего попутчика - программиста Сяо Хэюня.Теперь они вместе должны сделать все возможное, чтобы автобус добрался до места назначения, и таким образом разорвать временную петлю.
                    </p>
                </div>
                <div className={styles.movieInfoMainInfo}>
                    <p>Страна: Китай</p>
                    <p>Страна: Китай</p>
                    <p>Страна: Китай</p>
                </div>
            </div>
            <div className={styles.movieInfoRight}>
                <div className={styles.movieInfoIconsPanel}>
                    <div className={styles.movieInfoIcon}>
                        <img src={fantasyIcon} />
                        <p>фантастика</p>
                    </div>
                    <div className={styles.movieInfoIcon}>
                        <img src={fantasyIcon} />
                        <p>фантастика</p>
                    </div>
                    <div className={styles.movieInfoIcon}>
                        <img src={fantasyIcon} />
                        <p>фантастика</p>
                    </div>
                    <div className={styles.movieInfoIcon}>
                        <img src={fantasyIcon} />
                        <p>фантастика</p>
                    </div>
                </div>
                <div className={styles.movieInfoRating}>
                    <h3>
                        Рейтинг
                    </h3>
                    <Rating rating={5} />
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;         