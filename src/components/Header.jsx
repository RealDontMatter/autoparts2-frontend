
import styles from "./Header.module.css"
import {HeaderSearchBar, HeaderActions} from ".";


export default function Header() {

    return (
        <header>
            <div className={styles.header1}>
                <div className={styles.container}>
                    <h1><a href="/">AutoParts2</a></h1>
                    <ul>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/about">Support</a></li>
                        <li><a href="/about">Details</a></li>
                        <li><a href="/about">About us</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.header2}>
                <div className={styles.container}>
                    <HeaderSearchBar />
                    <HeaderActions />
                </div>
            </div>
        </header>
    )
}