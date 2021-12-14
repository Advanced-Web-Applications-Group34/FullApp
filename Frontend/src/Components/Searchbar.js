import React from 'react'
import styles from '../Styles/searchbar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Searchbar(props) {
    return (
        <div>
            <div className={styles.container}>

                <input className={styles.searchbar} type="text" onChange={ props.onSearchFieldChange } value={ props.searchString } placeholder="Let's find foods comforting you !" />
                <FontAwesomeIcon className={styles.icon} icon={faSearch} />

            </div> 
        </div>
    )
}
