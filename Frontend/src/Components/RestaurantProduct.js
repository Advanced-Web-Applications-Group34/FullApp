import React from 'react'
import { useParams } from "react-router-dom";
import styles from '../Styles/restaurantProducts.module.css'
import data from '../data.json'
import { useCart } from "react-use-cart"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'



export default function RestaurantProduct() {
    
    const { addItem } = useCart();
    const { id } = useParams();
    const categories = data.products

    const restaurant = () => {
        let restaurantFound = {};
        data.restaurants.map(restaurant => (
            restaurant.id == id ? restaurantFound = restaurant : ""
        ))
        return restaurantFound
    }

    const findCategories = () => {
        const restaurantProductsCategories = [];
        categories.map(category => (
            category.id_restaurant == id ? restaurantProductsCategories.push(category) : ""
        ))
        return restaurantProductsCategories
    }

    return (
        <div className={styles.container}>

            <h1 className={styles.restaurantName}>{restaurant().name}</h1>

            {findCategories().map(category => (
                <div className={styles.category}>
                    <h2>{category.category_name}</h2>
                    
                    <ul>
                        {category.products.map(product => (
                            <li>
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <p>{product.price} €</p>
                                </div>
                                <div className={styles.cartButton}>
                                    <button onClick={() => addItem(product)}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    )
}
