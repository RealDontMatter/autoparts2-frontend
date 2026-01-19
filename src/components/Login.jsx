import styles from "./Login.module.css"
import {useContext, useState} from "react";
import {AppContext} from "../AppContext.jsx";
import {ModalLayout} from ".";
import {useForm} from "react-hook-form";

export default function Login({isOpen, close, openRegister}) {
    const {context, setContext} = useContext(AppContext);
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleClose() {
        setErrorMessage(null);
        reset();
        close();
    }

    function handleRegister() {
        setErrorMessage(null);
        reset();
        openRegister();
    }

    async function submitLogin(data) {
        if (isLoading) return;
        try {
            setIsLoading(true);
            let response = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.status === 404) {
                setErrorMessage("Failed to connect with the server.")
            } else {
                let data = await response.json();
                if (response.status === 200) setContext({...context, token: data.token});
                else setErrorMessage(data.message);
            }
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <ModalLayout isOpen={isOpen}>
            <div className={styles.page}>
                <form className={styles.container} onSubmit={handleSubmit(submitLogin)}>
                    <button
                        type="button"
                        aria-label="Close"
                        onClick={onClose}
                        className={styles.close}>
                        &times;
                    </button>
                    <label className={styles.group}>
                        <p className={styles.title}>Email</p>
                        <input
                            type="email"
                            placeholder="Email address"
                            {...register("email", {required: "Email is required"})}
                        />
                        {errors.email && <p className={styles.errorMsg}>{errors.email.message}</p>}
                    </label>
                    <label className={styles.group}>
                        <p className={styles.title}>Password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", {required: "Password is required"})}
                        />
                        {errors.password && <p className={styles.errorMsg}>{errors.password.message}</p>}
                    </label>
                    {errorMessage && <p className={styles.errorBlock}>{errorMessage}</p>}
                    <button
                        type="submit"
                        className={styles.submit}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className={styles.register}
                        onClick={handleRegister}
                    >
                        Dont have an account? Register!
                    </button>
                </form>
            </div>
        </ModalLayout>
    );
}