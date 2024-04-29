import styles from "./BigSlider.module.css"
import img from "../../assets/tempBack.jpg"

function BigSlider() {
    return (
        <div className={styles.bigSlider}
            style={{
                backgroundImage: `url(${img})`,

            }}
        >
            <h1>Приключения <br /> с Доктором Кто</h1>
            <p>
                И сотни других фильмов и <br />сериалов <br /> на твоё.кино
            </p>
        </div>
    )
}

export default BigSlider