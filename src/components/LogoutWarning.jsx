import styles from './LogoutWarning.module.css'
import {ModalLayout} from ".";

export default function LogoutWarning({isOpen, onClose, onLogout}) {
    return (
        <ModalLayout isOpen={isOpen}>
            <div className={styles.page}>
                <div className={styles.warnBox}>
                    <p className={styles.message}>Are sure you want logout?</p>
                    <div className={styles.buttonsBlock}>
                        <button className={`${styles.btn} ${styles.btnWarn}`} onClick={onLogout}>Yes</button>
                        <button className={styles.btn} onClick={onClose}>No</button>
                    </div>
                </div>
            </div>
        </ModalLayout>
    )
}