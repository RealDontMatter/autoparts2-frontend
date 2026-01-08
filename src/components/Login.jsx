import styles from "./Login.module.css"
import {useContext} from "react";
import {AppContext} from "../AppContext.jsx";

export default function Login({onClose}){
    const {context, setContext} = useContext(AppContext);
    function onLoginClick(){
        setContext({...context, userToken: 1});
        console.log(context);
        onClose();
    }
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <button onClick={onClose} className={styles.close}>X</button>
                <label className={styles.group}>
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Email address" required />
                </label>
                <label className={styles.group}>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Password" required />
                </label>
                <label className={styles.group}>
                    <button type="submit" onClick={onLoginClick}>Login</button>
                </label>
            </div>
        </div>
    );
}