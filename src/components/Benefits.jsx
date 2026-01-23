import styles from './Benefits.module.css'
import {useState} from "react";
import {ModalLayout} from "./index.jsx";

export default function Benefits() {
    const [warrantyModalShown, setWarrantyModalShown] = useState(false);
    const [calmModalShown, setCalmModalShown] = useState(false);

    const toggleWarrantyModal = () => setWarrantyModalShown(!warrantyModalShown);
    const toggleCalmModal = () => setCalmModalShown(!calmModalShown);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.cardBox}>
                    <p className={styles.title}>Huge assortment</p>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ex id, illum ipsam maxime minima repellat repudiandae suscipit?</p>
                </div>
                <div className={styles.cardBox}>
                    <p className={styles.title}>Calm Mode</p>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ex id, illum ipsam maxime minima repellat repudiandae suscipit?</p>
                    <button
                        className={styles.details}
                        onClick={toggleCalmModal}
                    >
                        ?
                    </button>
                </div>
                <div className={styles.cardBox}>
                    <p className={styles.title}>Warranty</p>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ex id, illum ipsam maxime minima repellat repudiandae suscipit?</p>
                    <button
                        className={styles.details}
                        onClick={toggleWarrantyModal}
                    >
                        ?
                    </button>
                </div>
                <div className={styles.cardBox}>
                    <p className={styles.title}>Support</p>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ex id, illum ipsam maxime minima repellat repudiandae suscipit?</p>
                </div>
            </div>
            <ModalLayout isOpen={warrantyModalShown}>
                <div className={styles.centeredLayout}>
                    <div className={styles.centeredContainer}>
                        <p className={styles.title}>Warranty</p>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad distinctio enim ipsum laudantium libero maxime minus molestias natus officiis possimus praesentium quibusdam quod recusandae, reprehenderit saepe sapiente tenetur vel, velit.</p>
                        <button
                            aria-label="Close"
                            className={styles.close}
                            onClick={toggleWarrantyModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            </ModalLayout>
            <ModalLayout isOpen={calmModalShown}>
                <div className={styles.centeredLayout}>
                    <div className={styles.centeredContainer}>
                        <p className={styles.title}>Calm mode</p>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam at consectetur corporis debitis dolore eaque, eos est fugiat, harum iste nemo obcaecati officia praesentium quo quod repellendus saepe voluptatibus?</p>
                        <button
                            aria-label="Close"
                            className={styles.close}
                            onClick={toggleCalmModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            </ModalLayout>
        </>
    );
}
