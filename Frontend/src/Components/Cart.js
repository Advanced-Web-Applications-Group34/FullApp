import React from 'react'
import styles from '../Styles/cart.module.css';
import { useCart } from 'react-use-cart';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function Cart() {

    const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } = useCart();

    return (
        <div>

            {console.warn(items)}

            <div className={styles.formWrapper}>

                <ul className={styles.deliveryChoice}>
                    <li>Delivery</li> 
                    <li>
                        <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className={styles.slider}></span>
                        </label>
                    </li>
                    <li>Pick-up</li>
                </ul>

                <h2>Your cart</h2>
                {isEmpty ? <h3>Your cart is empty</h3> : ""}

                <div>
                    {items.map((item, index) => {
                        return(
                            <tr className={styles.cartItem} key={index}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.description}
                                </td>
                                <td className={styles.itemPrice}>
                                    {item.price} €
                                </td>
                                <td className={styles.itemQuantity}>
                                    x {item.quantity}
                                </td>
                                <td className={styles.buttons}>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    <button className={styles.deleteButton} onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                            </tr>
                        )
                    })}
                </div>

                <div className={styles.priceContainer}>
                    <div className={styles.price}>
                        <p>Subtotal :</p>
                        <p>{cartTotal}€</p>
                    </div>
                    <div className={styles.price}>
                        <p>Total :</p>
                        <p>{cartTotal > 0 ? cartTotal + 4.5 : cartTotal}€</p>
                    </div>
                </div>

                <form className="form-action">
                    <Link to="/checkout">
                        <button className={styles.button} type="submit">Go to checkout</button>
                    </Link>
                </form>

            </div>
            
        </div>
    )
}
