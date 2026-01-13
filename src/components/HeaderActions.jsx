import {Login, LogoutWarning} from ".";
import {useContext, useState} from "react";
import {AppContext} from "../AppContext.jsx";
import styles from "./HeaderActions.module.css"

export default function  HeaderActions(){
    const {context, setContext} = useContext(AppContext);
    const logged = context.userToken !== null;

    const [isLoginOpened, setIsLoginOpened] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [logoutWarningShown, setLogoutWarningShown] = useState(false);

    const logout = () => {
        setContext({...context, userToken: null});
        setProfileMenuOpen(false);
        setLogoutWarningShown(false);
    }
    const closeLogoutWarning = () => {
        setLogoutWarningShown(false);
    }
    const showLogoutWarning= () => {
        setProfileMenuOpen(false);
        setLogoutWarningShown(true);
    }
    const toggleProfileMenuVisibility = () => {
        setProfileMenuOpen(!profileMenuOpen);
    }
    const onLoginClick = () => {
        setIsLoginOpened(true);
    }
    return (
        <>
            {
                logged ?
                <div className={styles.profileGroup}>
                    <button className={styles.favoriteButton}>
                        <img src="/cart.svg" alt="Cart" width={32} />
                    </button>
                    <button className={styles.cartButton}>
                        <img src="/cart.svg" alt="Cart" width={32} />
                    </button>
                    <button className={styles.profileButton} onClick={toggleProfileMenuVisibility}>
                        <img src="/profile.png" alt="Profile Image" width={32} />
                    </button>
                    {
                        profileMenuOpen &&
                        <div className={styles.profileMenu}>
                            <button onClick={showLogoutWarning}>
                                <img src="/logout.png" width={24} alt="Logout" />
                                <p>Log Out</p>
                            </button>
                        </div>
                    }
                </div> :
                <button className={styles.loginButton} onClick={onLoginClick}>Log in</button>
            }
            <LogoutWarning isOpen={logoutWarningShown} onLogout={logout} onClose={closeLogoutWarning} />
            <Login isOpen={isLoginOpened} onClose={() => setIsLoginOpened(false)} />
        </>
    )
}