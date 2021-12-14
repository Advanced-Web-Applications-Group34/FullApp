import React, {useState} from 'react';
import styles from'../Styles/UserSignupForm.module.css';
//import UserSignupSuccess from '../Components/UserSignupSuccess';
import Axios from 'axios';



export default function UserSignupForm() {
    const handleSubmitForm = (e) => {
        alert('Account' + email + 'created !');
        e.preventDefault();
    }
    
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [fname, setName] = useState ("");
    const [lname, setlName] = useState ("");
    const [address, setAddress] = useState ("");
    const [postalcode, setPostalcode] = useState ("");
    const [phonenumber, setPhonenumber] = useState ("");


    const createUser = () => {
        Axios.post('http://localhost:8080/usersignup', {
            email: email,
            password: password,
            fname: fname,
            lname: lname,
            address: address,
            postalcode: postalcode,
            phonenumber: phonenumber   
        }).then(() => {
            console.log("User values inserted");
        });
    };


    return (
        <div className={styles.container}>
            <div className={styles.appWrapper}>
                <div>
                    <h2 className={styles.title}>Enter the following information</h2>
                </div>

                <form className={styles.formWrapper} onSubmit={handleSubmitForm}>
                    <div className={styles.email}>
                        <label className={styles.label}>Email</label>
                        <input className={styles.input} 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.password}>
                        <label className={styles.label}>Password</label>
                        <input className={styles.input}
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div class Name={styles.fname}> 
                        <label className={styles.label}>First Name</label>
                        <input className={styles.input} 
                                type="text" 
                                value={fname}
                                onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div class Name={styles.lname}> 
                        <label className={styles.label}>Last Name</label>
                        <input className={styles.input} 
                                type="text" 
                                value={lname}
                                onChange={(e) => setlName(e.target.value)}
                        />
                    </div>
                    <div class Name={styles.address}> 
                        <label className={styles.label}>Address</label>
                        <input className={styles.input} 
                                type="text" 
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div class Name={styles.postalcode}> 
                        <label className={styles.label}>Postalcode</label>
                        <input className={styles.input} 
                                type="text" 
                                value={postalcode}
                                onChange={(e) => setPostalcode(e.target.value)}
                        />
                    </div>
                    <div class Name={styles.phonenumber}> 
                        <label className={styles.label}>Phonenumber</label>
                        <input className={styles.input} 
                                type="text" 
                                value={phonenumber}
                                onChange={(e) => setPhonenumber(e.target.value)}
                        />
                    </div>

                    <div className={styles.submit}>
                        {/* <button onClick={Submit}>Sign Up</button> */}
                        <button onClick={createUser}>Sign Up</button>
                    </div>
                </form>
            </div>
            {/* { formIsSubmitted && <UserSignupSuccess/>} */}
        </div>
    )
}
