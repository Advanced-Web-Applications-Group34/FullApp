import React from 'react'
import { Link } from "react-router-dom";
import styles from '../Styles/navbar.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {

    return (
        <div>
            <nav className={styles.navbar}>

                {/* App title */}
                <h1 className={styles.title}>
                    <Link className={styles.link} to="/">AWA</Link>
                </h1>

                {/* Pages */}
                <div className={styles.pages}>
                    <Link className={styles.link} to="/">Home</Link>
                    <Link to="/restaurants">Restaurants</Link>
                </div>

                {/* Cart and user personal page */}
                <div className={styles.userPart}>
                    <Link to="/login">Log in</Link>
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                </div>
                
            </nav>
        </div>
    )
}
