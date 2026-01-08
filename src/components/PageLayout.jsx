import styles from './PageLayout.module.css';
import {Footer, Header, Login, ModalLayout} from "./index.jsx";
import {useState} from "react";

export default function PageLayout({children}) {
    const [isLoginOpened, setIsLoginOpened] = useState(false);

    return (
        <>
            <div className={styles.page}>
                <Header onLoginClick={() => setIsLoginOpened(true)} />
                <div className={styles.body}> {children} </div>
                <Footer />
            </div>
            <ModalLayout isOpen={isLoginOpened}>
                <Login onClose={() => setIsLoginOpened(false)} />
            </ModalLayout>
        </>
    )
}