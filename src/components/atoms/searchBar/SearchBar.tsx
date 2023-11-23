import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './searchBar.module.css';

function SearchBar(): JSX.Element {
    return (
        <form className={styles.container}>
            <input className={styles.searchBar} type='text' placeholder='Search...' />
            <button>
                <FaSearch size={20} />
            </button>
        </form>
    )
}

export default SearchBar;