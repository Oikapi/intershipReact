import React from 'react'
import styles from "./PopularNow.module.css"
import jpeg from "../../assets/tempPop.png"

function PopularNow() {
    return (
        <div className={styles.popularNow}>
            <div className={styles.popularHeader}>
                <h1>Популярно сейчас</h1>
            </div>
            <div className={styles.popularList}>
                <div className={styles.popularEach}>
                    <img src={jpeg}></img>
                    <div className={styles.popularEachMainInfo}>
                        <h3>
                            Джон Уик 4
                        </h3>
                        <p>
                            боевик <br />криминал<br /> триллер<br /><br /> 2023
                        </p>
                    </div>
                    <div className={styles.popularEachShort}>
                        <p>
                            Оставляя за собой горы трупов,Джон Уик продолжает скрываться
                            от всевозможных наёмных убийц, и теперь охоту на него возглавляет молодой и честолюбивый член
                            Правления по имени Маркиз. Два управляющих отелями ...
                        </p>
                    </div>
                    <div className={styles.popularEachScore}>
                        <h3>
                            7.5
                        </h3>
                        <p>
                            31 239<br />оценок
                        </p>
                    </div>
                </div>
                <div className={styles.popularEach}>
                    <img src={jpeg}></img>
                    <div className={styles.popularEachMainInfo}>
                        <h3>
                            Джон Уик 4
                        </h3>
                        <p>
                            боевик <br />криминал<br /> триллер<br /><br /> 2023
                        </p>
                    </div>
                    <div className={styles.popularEachShort}>
                        <p>
                            Оставляя за собой горы трупов,Джон Уик продолжает скрываться
                            от всевозможных наёмных убийц, и теперь охоту на него возглавляет молодой и честолюбивый член
                            Правления по имени Маркиз. Два управляющих отелями ...
                        </p>
                    </div>
                    <div className={styles.popularEachScore}>
                        <h3>
                            7.5
                        </h3>
                        <p>
                            31 239<br />оценок
                        </p>
                    </div>
                </div>
                <div className={styles.popularEach}>
                    <img src={jpeg}></img>
                    <div className={styles.popularEachMainInfo}>
                        <h3>
                            Джон Уик 4
                        </h3>
                        <p>
                            боевик <br />криминал<br /> триллер<br /><br /> 2023
                        </p>
                    </div>
                    <div className={styles.popularEachShort}>
                        <p>
                            Оставляя за собой горы трупов,Джон Уик продолжает скрываться
                            от всевозможных наёмных убийц, и теперь охоту на него возглавляет молодой и честолюбивый член
                            Правления по имени Маркиз. Два управляющих отелями ...
                        </p>
                    </div>
                    <div className={styles.popularEachScore}>
                        <h3>
                            7.5
                        </h3>
                        <p>
                            31 239<br />оценок
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularNow