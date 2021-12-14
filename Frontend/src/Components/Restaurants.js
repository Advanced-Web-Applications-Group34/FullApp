import React from 'react'
import data from '../data.json'
import styles from '../Styles/restaurantsView.module.css'
import RestaurantCard from './RestaurantCard';


export default function Restaurants() {

    const restaurants = data.restaurants;
    const categories = data.categories;

    // Display restaurants of each category
    const displayRestaurant = (categoryRestaurant, category, restaurant) => {
        if (category.name.toLowerCase() === categoryRestaurant.toLowerCase()) {
            return <RestaurantCard
                        id={restaurant.id}
                        image={restaurant.image}
                        name={restaurant.name}
                        categories={restaurant.categories}
                        priceRange={restaurant.priceRange}
                        rate={restaurant.rate}
                    >
                    </RestaurantCard>

        }
    }


    return (
        <div>



            <div className={styles.categoryView}>
                {categories.map(category => (

                    <div className={styles.category}>
                        <h3>{category.name}</h3>
                        <div className={styles.displayRestaurants}>
                            {restaurants.map(restaurant => (
                                restaurant.categories.map(categoryRestaurant => (

                                    displayRestaurant(categoryRestaurant, category, restaurant)
                                ))
                            ))}
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}
