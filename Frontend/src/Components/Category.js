import React from 'react'
import { useParams } from "react-router-dom";
import data from '../data.json'
import styles from '../Styles/category.module.css'
import RestaurantCard from './RestaurantCard';


export default function Category() {

    const { id } = useParams();
    const categories = data.categories
    const restaurants = data.restaurants

    const findCategory = () => {
        let categoryFound = {};
        categories.map(category => (
            category.id == id ? categoryFound = category  : ""
        ))
        return categoryFound
    }

    const findRestaurants = () => {
        let restaurantsFound = [];
        restaurants.map(restaurant => (
            restaurant.categories.map(category => (
                category.toLowerCase() == findCategory().name.toLowerCase() ? restaurantsFound.push(restaurant) : ""
            ))
        ))
        return restaurantsFound
    }

    return (
        <div className={styles.container}>

            <h2>{findCategory().name}</h2>
            
            <div className={styles.elementsGrid}>
                {findRestaurants().map(restaurant => (
                    <RestaurantCard
                        id={restaurant.id}
                        image={restaurant.image}
                        name={restaurant.name}
                        categories={restaurant.categories}
                        priceRange={restaurant.priceRange}
                        rate={restaurant.rate}
                    >
                    </RestaurantCard>
                ))}
            </div>

        </div>
    )
}
