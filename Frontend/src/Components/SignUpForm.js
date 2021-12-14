import React from 'react';
import styles from '../Styles/SignUpForm.module.css';
import {Link} from 'react-router-dom';

export default function SignUpForm() {
    return (
        <div className = {styles.card}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>SIGN UP</p>
                </div>
                <div>
                <Link to="./UserSignupForm">
                    <button className={styles.btn1}>Create an user account</button>   
                </Link>
                </div>
                <div>
                <Link to="./ResSignupForm">
                    <button className={styles.btn2}>Create a restaurant account</button>
                </Link>
                </div>
            </div>
        </div>
    )
}
