import styles from './SubcategoryPage.module.css'
import {PageLayout} from "../components";
import {useParams} from "react-router";

export default function SubcategoryPage() {
    const params = useParams();
    return (
        <PageLayout>
            <div className={styles.container}>
                <div className={styles.aside}>
                    <div className={styles.costFilterGroup}>
                        <p className={styles.title}>Cost</p>
                        <div className={styles.inputs}>
                            <input type="text"/>
                            <span>-</span>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div>SubCategory ID: {params.id}</div>
                </div>
            </div>
        </PageLayout>
    )
}