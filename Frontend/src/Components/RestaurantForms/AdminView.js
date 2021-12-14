import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styles from '../../Styles/RestaurantForms/AdminView.module.css';
import {useForm} from 'react-hook-form';
import Axios from 'axios';


export default function AdminView() {

    const [name, setName] = useState("");
    const [category, setCategory] = useState({
        value: 'Burger'
    });
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("");
    const [foodimage, setfoodImage] = useState("")
    const [allItem, setAllItem] = useState([]);

    const addNewItem = () => {
        const newItem = 
        {
            id: Date.now(),
            name:name,
            description:description,
            price:price,
            foodimage:foodimage 
        };

        setAllItem([...allItem, newItem]);
    }
    
      const createMenu = () => {
        Axios.post('http://localhost:8080/menuset', {
            name:name,
            description:description,
            price:price,
            foodimage:foodimage 
        }).then(() => {
            console.log("User values inserted");
        });
    };
    


    const register = useForm ();

    const onDeleteItemClick = (itemId) => {
        setAllItem(prevState => prevState.filter(({ id }) => id !== itemId));
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <label className={styles.label}>Let's create your menu !</label>
                <br></br>
                <div>Category
                    <select className={styles.resType} value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Burger">Buffet</option>
                        <option value="Sushi">Fast-food</option>
                        <option value="Pizza">Fast-casual</option>
                        <option value="Mexican">Casual dining</option>
                        <option value="Kebap">Fine dining</option>
                        <option value="Asian">Fine dining</option>
                        <option value="Finnish">Fine dining</option>
                    </select>

                </div>
                <div>
                    Name: <input type="text" 
                                value={name}
                                onChange={ (e) => setName(e.target.value) } />
                </div>
                <div>
                    Description: <input type="text" 
                                        value={description}
                                        onChange={ (e) => setDescription(e.target.value) } />
                </div>
                <div>
                    Price: € <input type="text" 
                                value={price} 
                                onChange={ (e) => setPrice(e.target.value) } />
                </div>
                <div>
                    Choose file: <input ref ={register}
                                        type ='file' 
                                        name ='picture'
                                        value ={foodimage}
                                        onChange={ (e) => setfoodImage(e.target.value) } />
                </div>
                <button className ={styles.addingBtn} onClick={ createMenu}>Add Item</button>
            </div>

            <div className={styles.listWrapper}>
                <h2>List of items</h2>
                {allItem.map(curElem => (
                    <div className ={styles.itemList}>
                        <button className ={styles.deleteBtn} onClick={() => onDeleteItemClick(curElem.id)}>X</button>
                        <p>{curElem.category.value} - </p>
                        <p>{curElem.name} {curElem.name ? "- " : ""}</p>
                        <p>{curElem.description} {curElem.description ? "- " : ""}</p>
                        <p>{curElem.price} {curElem.price ? "- " : ""}</p>
                        <p>{curElem.image}</p>
                    </div>
                ))}
            </div>

            <div>
            <Link to="./Menu">
                <button className={styles.disableBtn}>Disable Admin Mode</button>
            </Link>
            </div>

        </div>
    )
}