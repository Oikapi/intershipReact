import styles from "./MovieTitle.module.css"
import jpeg from "../../assets/tempMovie.jpg"

type MovieTitleProps = {
    title: string | undefined;
    typeOfFilm: string | undefined;
    backdrop: string | undefined
    // Дополнительные пропсы, если есть
};

const typeToString: Record<string, string> = {
    movie: "Фильм",
    serial: "Сериал",
};

function MovieTitle({ title, typeOfFilm, backdrop }: MovieTitleProps) {
    console.log(typeOfFilm)
    return (
        <div className={styles.movieTitle}
            style={{
                backgroundImage: `url(${backdrop})`,
                backgroundSize: 'cover'
            }}
        >
            <h1>{title}</h1>
            <p>{typeToString[typeOfFilm || "movie"]}</p>
        </div>
    )
}

export default MovieTitle