'use client'
import React from 'react';
import styles from './productsSummary.module.css';
import SearchBar from '@/components/atoms/searchBar/SearchBar';
import SummaryCard from '@/components/atoms/summaryCard/SummaryCard';
import { FaPencilAlt } from 'react-icons/fa';

interface productsSummaryProps {
    handleEditCategory: () => void,
    categoriesList: string[],
}

function ProductsSummary({ handleEditCategory, categoriesList }: productsSummaryProps): JSX.Element {

    return (
        <div>
            <div className={styles.summaryContainer}>
                <SummaryCard title='Total Products' value={0} type='product' />
                <SummaryCard title='Total Inventory Cost' value={0} type='profit' />
            </div>
            <div className={styles.searchBarContainer}>
                <button onClick={handleEditCategory} className={styles.editCategoriesButton}><FaPencilAlt />Categories</button>
                <select className={styles.selectCategory}>
                    <option>All categories</option>
                    {categoriesList.map((category) =>
                        <option key={category}>{category}</option>
                    )}
                </select>
                <SearchBar />
            </div>
        </div>
    )
}

export default ProductsSummary;