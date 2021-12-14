import React from 'react'
import styles from '../Styles/restaurantsView.module.css'
import CategoryCard from './CategoryCard';
import RestaurantCard from './RestaurantCard';

export default function SearchView(props) {

    const restaurants = props.restaurants;
    const categories = props.categories;

    return (
        <div>
            
            <div className={styles.container}>

                <h2>Restaurants</h2>

                <div className={styles.elementsGrid}>
                    {restaurants.map(restaurant => (
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

                <h2>Categories</h2>

                <div className={styles.elementsGrid}>
                    {categories.map(category => (
                        <CategoryCard
                            id={category.id}
                            name={category.name}
                            image={category.image}
                        >
                        </CategoryCard>
                    ))}
                </div>


            </div>
            
        </div>
    )
}
