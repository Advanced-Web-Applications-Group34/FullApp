import React from 'react'
import styles from '../Styles/checkout.module.css';
import { useCart } from 'react-use-cart';




export default function Checkout() {

    const { emptyCart } = useCart();

    const onSubmit = (event) => {
        event.preventDefault();
        emptyCart()
        alert("Successful payment")
    }
    
    return (
        <div>
            <div className={styles.formWrapper}>
                <h2>Checkout</h2>

                <form onSubmit={onSubmit} className={styles.cardInformation}>
                    <label for="cardNumber">Card number</label>
                    <input type="text" name="cardNumber" id="number" />
                    <div>
                        <div>
                            <label for="expirationDate">Expiration date</label>
                            <input type="date" name="expirationDate" id="" min="today" />
                        </div>
                        <div>
                            <label for="CVV">CVV</label>
                            <input type="text" name="CVV" id="CVV" maxLength="3" />
                        </div>
                    </div>
                    <button className={styles.button} type="submit">Pay now</button>
                </form>
            

            </div>
        </div>
    )
    }
