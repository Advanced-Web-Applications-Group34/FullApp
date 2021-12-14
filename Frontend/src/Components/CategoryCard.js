import React from 'react'
import styles from '../Styles/card.module.css'


export default function CategoryCard(props) {
    return (
        <div className={styles.elementPreview} key={props.id} >
            <a href={`/category/${props.id}`}>
                <img src={`/images/restaurants/${props.image}`} alt={props.name} />

                <div className={styles.bottomElement}>
                    <h3>{props.name}</h3>
                </div>
            </a>
        </div>
    )
}
