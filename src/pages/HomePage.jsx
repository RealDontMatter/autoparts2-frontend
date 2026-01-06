import styles from "./HomePage.module.css";
import {HomePageCard, PageLayout} from "../components";
import {useEffect, useState} from "react";

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function getData() {
            let response = await fetch("/api/getAllCategories")
            let json = await response.json()
            setCategories(json)
            setLoading(false);
        }
        getData();
    }, [])

    return (
        <PageLayout>
            <div className={styles.container}>
                <h2>Catalog</h2>
                <div className={styles.cardContainer}>
                    {
                        categories.map((category) => (
                            <HomePageCard category={category} />
                        ))
                    }

                </div>
            </div>
        </PageLayout>
    )
}