import React from 'react'
import styles from '../Styles/card.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default function RestaurantCard(props) {



    return (
        <div className={styles.elementPreview} key={props.id} >
            <a href={`/restaurant/${props.id}`}>
                <img src={`/images/restaurants/${props.image}`} alt={props.name} />

                <div className={styles.bottomElement}>

                    <h3>{props.name}</h3>
                    <h4>{props.categories.map(category => (
                        <span>{category}</span>
                    ))}</h4>

                    <div className={styles.informations}>
                        <div className={styles.deliveryPrice}>
                            <FontAwesomeIcon icon={faBiking} />
                            <p>€1.90</p>
                        </div>
                        <div className={styles.priceRange}>
                            <p>{props.priceRange}</p>
                        </div>
                        <div className={styles.rate}>
                            <FontAwesomeIcon icon={faStar} />
                            <p>{props.rate}/5</p>
                        </div>
                    </div>

                </div>
            </a>

        </div>
    )
}
