'use client'
import React from 'react';
import styles from './productsSummary.module.css';
import SearchBar from '@/components/atoms/searchBar/SearchBar';
import SummaryCard from '@/components/atoms/summaryCard/SummaryCard';
import { FaPencilAlt } from 'react-icons/fa';

interface productsSummaryProps {
    handleEditCategory: () => void,
    categoriesList: any,
}

function ProductsSummary({ handleEditCategory, categoriesList }: productsSummaryProps): JSX.Element {

    return (
        <div style={{ marginBottom: '20px' }}>
            <div className={styles.summaryContainer}>
                <SummaryCard title='Total Products' value={0} type='product' />
                <SummaryCard title='Total Inventory Cost' value={0} type='profit' />
            </div>
            <div className={styles.searchBarContainer}>
                <button onClick={handleEditCategory} className={styles.editCategoriesButton}><FaPencilAlt />Categories</button>
                <select className={styles.selectCategory}>
                    <option key={0}>All categories</option>
                    {categoriesList?.map((category: { id: string, name: string }) =>
                        <option key={category.id}>{category.name}</option>
                    )}
                </select>
                <SearchBar />
            </div>
        </div>
    )
}

export default ProductsSummary;