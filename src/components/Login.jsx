import styles from "./Login.module.css"

export default function Login({onClose}){
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
                    <button type="submit">Login</button>
                </label>
            </div>
        </div>
    );
}