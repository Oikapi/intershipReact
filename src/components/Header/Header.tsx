import React from 'react'
import NavBar from '../NavBar/NavBar'
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerContainer}>
                <h2>Твое кино</h2>
                <NavBar />
            </div >
        </header >
    )
}

export default Header