import React from 'react'
import Searchbar from './Searchbar';
import SearchView from './SearchView';
import data from '../data.json'
import { useState } from 'react';



export default function Home() {

    const restaurants = data.restaurants;
    const categories = data.categories;


    const [filteredData, setFilteredData] = useState(restaurants);


    const onSearchFieldChange = (event) => {
        const searchWord = event.target.value;
        const newFilter = restaurants.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        })
        setFilteredData(newFilter);
    }

    return (

        <div>

            {/* SearchBar */}
            <Searchbar
                onSearchFieldChange={onSearchFieldChange} filteredData={filteredData}
            />

            {/* Restaurants & Categories */}
            <SearchView
                restaurants={filteredData}
                categories={categories}
            />
            
        </div>
    )
}
