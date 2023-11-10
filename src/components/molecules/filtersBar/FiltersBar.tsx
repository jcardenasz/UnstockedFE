import React from "react";
import styles from "./filtersBar.module.css";
import SearchBar from "@/components/atoms/searchBar/SearchBar";

function FiltersBar(): JSX.Element {
    return (
        <div className={styles.container}>
            <button className={styles.filtersButton}>Filters</button>
            <select className={styles.selectInterval}>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
            </select>
            <input className={styles.inputDate} type="date" />
            <SearchBar />
        </div>
    )
}

export default FiltersBar;
