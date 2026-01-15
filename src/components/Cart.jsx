import styles from "./Cart.module.css"
import {ModalLayout} from ".";
import {useEffect, useState} from "react";

export default function Cart({isOpen, onClose}){
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("/api/getCartItems");
            let json = await response.json();
            console.log(json);
            setCartItems(json.items);
        }
        fetchData();
    }, []);

    const updateItemQuantity = (id, quantity) => {
        let newItems = [...cartItems];
        newItems.forEach((item, index) => {
            if (item.id === id) {
                newItems[index].quantity = quantity;
            }
        })
        setCartItems(newItems);
    }
    const mapItems = () => {
        if(!cartItems || cartItems.length === 0) return <p className={styles.noItems}>No Items found in the cart</p>;
        return cartItems.map((item, index) => {
            const onInputChange = ev => updateItemQuantity(item.id, parseInt(ev.target.value));
            return (
                <div key={index} className={styles.cartItem}>
                    <p>{item.name}</p>
                    <input
                        type="number"
                        maxLength={2}
                        value={item.quantity}
                        onChange={onInputChange} />
                </div>
            )
        });
    }

    return (
        <ModalLayout isOpen={isOpen}>
            <div className={styles.page}>
                <div className={styles.container}>
                    <button className={styles.close} onClick={onClose}>X</button>
                    <div className={styles.items}>
                        {mapItems()}
                    </div>
                </div>
            </div>
        </ModalLayout>
    )
}