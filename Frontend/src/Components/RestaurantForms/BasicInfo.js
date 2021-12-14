import React, {useState} from "react";
import styles from "../../Styles/RestaurantForms/BasicInfo.module.css"; 
import {Link} from 'react-router-dom';
import Axios from 'axios';


export default function BasicInfo() {
    const handleSubmitForm = (e) => {
        alert("Account" + resname + "created !");
        e.preventDefault();
    };

   


    const [resname, setresName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ resType, setresType] = useState({
        value: 'Buffet'
    });
    const [priceLevel, setpriceLevel] = useState({
        value: '€'
    });
    const [fromOpHours, setfromOpHours] = useState('');
    const [ToOpHours, setToOpHours] = useState('');
    
    const createResUser = () => {
        Axios.post('http://localhost:8080/ressignup', {
            resname:resname,
            address:address,
            email: email,
            password: password,
            fromOpHours:fromOpHours,
            ToOpHours:ToOpHours,
            resType: resType, 
            priceLevel: priceLevel   
        }).then(() => {
            console.log("User values inserted");
        });
    };

 
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h2 className={styles.title}>Enter the following information</h2>
                </div>

                <form className={styles.formWrapper} onSubmit={handleSubmitForm}>
                    <div class Name={styles.resname}>
                        <label className={styles.label}>Restaurant Name</label>
                        <input
                        className={styles.input}
                        type="text"
                        value={resname}
                        onChange={(e) => setresName(e.target.value)}
                        />
                    </div>
                    <div class Name={styles.address}>
                        <label className={styles.label}>Address</label>
                        <input
                        className={styles.input}
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className={styles.email}>
                        <label className={styles.label}>Email</label>
                        <input
                        className={styles.input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.password}>
                        <label className={styles.label}>Password</label>
                        <input
                        className={styles.input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div >
                    <div className={styles.subInfo1}>
                        <label className={styles.label}>Operating Hour:</label>
                        <div className={styles.hour}>
                            <p className={styles.timeTitle}>
                                From:
                                <input className={styles.timeBox}
                                    type="time"
                                    value={fromOpHours}
                                    onChange={(e) => setfromOpHours(e.target.value)}
                                />
                            </p>
                            <p className={styles.timeTitle}>
                                To:
                                <input className={styles.timeBox}
                                    type="time"
                                    value={ToOpHours}
                                    onChange={(e) => setToOpHours(e.target.value)}
                                />
                            </p>
                        </div>

                    </div>
                    <div className={styles.subInfo2}>
                        <div className={styles.resType}>
                            <label className={styles.label}>Restaurant Type:</label>                            
                            <br></br>
                            <select className={styles.resType} value={resType} onChange={(e) => setresType(e.target.value)}>
                                <option value="Buffet">Buffet</option>
                                <option value="Fast-food">Fast-food</option>
                                <option value="Fast-casual">Fast-casual</option>
                                <option value="Casual dining">Casual dining</option>
                                <option value="Fine dining">Fine dining</option>
                            </select>
                        </div>
                        <div className={styles.priceLevel}>
                            <label className={styles.label}>Price Level:</label> 
                            <br></br>
                            <select className={styles.resType} value={priceLevel} onChange={(e) => setpriceLevel(e.target.value)}>
                                <option value="€">€</option>
                                <option value="€€">€€</option>
                                <option value="€€€">€€€</option>
                                <option value="€€€€">€€€€</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.submit}>
                    <Link to="./AdminView">
                        <button onClick={createResUser}>Next</button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
