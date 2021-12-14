import React, {useState} from 'react';
import styles from '../Styles/signInForm.module.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';


export default function SignInForm() {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    //manage login state
    const [allLogin, setAllLogin] = useState ([]);

    const submitForm = (e) => {
        e.preventDefault();
        //prevent default process of the browser when event occurs

        const newLogin = { email: email, password: password };
        setAllLogin([ ...allLogin, newLogin ]);
        //when hitting the login button, data stored as a props
    }

   
    const createUser = () => {
        Axios.post('http://localhost:8080/login', {
            email: email,
            password: password,
        }).then(() => {
            console.log("User values inserted");
        });
    };



    return (
        <div className={styles.formWrapper}>
            <div className={styles.container}>
                <div>
                    <h2>Create an account or log in</h2>
                </div>
                <div className={styles.subSentence}>
                    <p>Don't have an account ? 
                        <Link to ='./SignUpForm'>
                            Sign up !
                        </Link>
                    </p>
                </div>
                <div className={styles.formAction}>
                    <form onSubmit={submitForm}>
                        <div>
                            <p className={styles.email}>Email</p>
                            <input className={styles.input}
                                    type="email" 
                                    autoComplete="off"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                            />
                        </div> 

                        <div>
                            <p className={styles.password}>Password</p>
                            <input className={styles.input}
                                    type="password" 
                                    autoComplete="off"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className={styles.btn}>
                            <button onClick={createUser} type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}