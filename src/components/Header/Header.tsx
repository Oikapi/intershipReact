import React from 'react'
import NavBar from '../NavBar/NavBar'
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerContainer}>
                <h2 onClick={() => navigate("/")}>Твое кино</h2>
                <NavBar />
            </div >
        </header >
    )
}

export default Header