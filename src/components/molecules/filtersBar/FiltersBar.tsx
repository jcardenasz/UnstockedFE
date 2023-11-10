import React from "react";
import styles from "./filtersBar.module.css";

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
            <input className={styles.searchbar} placeholder="Search a transaction" />
        </div>
    )
}

export default FiltersBar;
