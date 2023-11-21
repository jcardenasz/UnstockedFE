'use client'
import React, { useState } from 'react';
import styles from './productsSummary.module.css';
import SearchBar from '@/components/atoms/searchBar/SearchBar';
import SummaryCard from '@/components/atoms/summaryCard/SummaryCard';
import { FaPencilAlt } from 'react-icons/fa';
import RightBar from '@/components/atoms/rightBar/RightBar';

function ProductsSummary(): JSX.Element {

    const [editCategoryIsOpen, setEditCategoryIsOpen] = useState(false);

    const categoriesList = ['Op 1', 'Op 2', 'Op 3'];

    const handleEditCategory = (): void => {
        setEditCategoryIsOpen(true);
    }

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
            <RightBar isOpen={editCategoryIsOpen} setIsOpen={setEditCategoryIsOpen} title='Edit Category'>
                <p>Edit Category</p>
            </RightBar>
        </div>
    )
}

export default ProductsSummary;