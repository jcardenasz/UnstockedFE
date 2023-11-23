'use client'

import React from 'react';
import styles from './productsHeader.module.css';

interface productsHeaderProps {
    handleAddCategory: () => void,
    handleAddProduct: () => void,
}

function ProductsHeader({ handleAddCategory, handleAddProduct }: productsHeaderProps): JSX.Element {

    return (
        <>
            <header className={styles.productsHeader}>
                <h1 className={styles.title}>Products</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.divider}></div>
                    <button className={styles.newCategoryButton} onClick={handleAddCategory}>Add category</button>
                    <button className={styles.newProductButton} onClick={handleAddProduct}>Add products</button>
                </div>
            </header>
        </>

    )
}

export default ProductsHeader;