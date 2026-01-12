import styles from './PageLayout.module.css';
import {Footer, Header} from ".";

export default function PageLayout({children}) {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <div className={styles.body}> {children} </div>
                <Footer />
            </div>
        </>
    )
}