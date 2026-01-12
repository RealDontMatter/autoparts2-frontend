
import styles from "./Header.module.css"
import {useContext, useState} from "react";
import {AppContext} from "../AppContext.jsx";
import {LogoutWarning, HeaderSearchBar} from ".";


export default function Header({ onLoginClick}) {
    const {context, setContext} = useContext(AppContext);
    const logged = context.userToken !== null;

    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [logoutWarningShown, setLogoutWarningShown] = useState(false);

    function logout(){
        setContext({...context, userToken: null});
        setProfileMenuOpen(false);
        setLogoutWarningShown(false);
    }
    const closeLogoutWarning = () => setLogoutWarningShown(false);
    const showLogoutWarning= () => {
        setProfileMenuOpen(false);
        setLogoutWarningShown(true);
    }
    const toggleProfileMenuVisibility = () => setProfileMenuOpen(!profileMenuOpen);

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
                    {
                        logged ?
                        <div className={styles.profileGroup}>
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

                </div>
            </div>
            <LogoutWarning isOpen={logoutWarningShown} onLogout={logout} onClose={closeLogoutWarning} />
        </header>
    )
}