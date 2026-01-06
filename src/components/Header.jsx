
import styles from "./Header.module.css"


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1><a href="/">AutoParts2</a></h1>
                <ul>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/about">Support</a></li>
                    <li><a href="/about">Details</a></li>
                    <li><a href="/about">About us</a></li>
                </ul>
            </div>
        </header>
    )
}