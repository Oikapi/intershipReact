import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

function NavBar() {
    return (

        <div className={styles.navBar}>
            <Link to="movies">Фильмы </Link>
            <Link to="serials">Сериалы</Link>
            <Link to="cartoons">Мультфильмы </Link>
        </div>
    )
}

export default NavBar