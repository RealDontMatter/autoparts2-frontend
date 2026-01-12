import styles from "./HeaderSearchBar.module.css"
import {useEffect, useState} from "react";

export default function HeaderSearchBar() {
    const [searchResultsShown, setSearchResultsShown] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState([]);

    useEffect(()=> {
        if(searchValue.length < 1) return
        async function fetchData() {
            const response = await fetch("/api/search");
            const data = await response.json();
            setResults(data.results);
        }
        fetchData()
    }, [searchValue]);

    const onInputChange = (event) => {
        let value = event.target.value;
        setSearchValue(event.target.value);
        setSearchResultsShown(value.length >= 1);
    }
    const onInputBlur = () => {
        setSearchResultsShown(false);
    }
    const onInputFocus = () => {
        setSearchResultsShown(searchValue.length >= 1);
    }

    const mapResults = () => {
        return (
            <div className={styles.results}>
                {
                    results.length > 0 ?
                    results.map((result) => {
                        return <p key={result.id}><a href={`/subcategory/${result.id}`}>{result.text}</a></p>
                    }) :
                    <p>No results find</p>
                }
            </div>
        )
    }

    return (
        <div className={styles.searchBlock}>
            <label className={styles.search}>
                <img src="/vite.svg" width="24" alt="Search icon" />
                <input type="text" value={searchValue} onChange={onInputChange} onBlur={onInputBlur} onFocus={onInputFocus} />
            </label>
            {searchResultsShown && mapResults()}
        </div>
    )
}