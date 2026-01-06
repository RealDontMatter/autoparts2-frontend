import styles from "./HomePageCard.module.css";



export default function HomePageCard({category}) {
    return (
        <div className={styles.card}>
            <h2><a href={`/category/${category.id}`}>{category.name}</a></h2>
            <ul>
                { category.subcategories.map(subcategory => (
                    <li key={subcategory.id}>
                        <a href={`/subcategory/${subcategory.id}`}>
                            {subcategory.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}