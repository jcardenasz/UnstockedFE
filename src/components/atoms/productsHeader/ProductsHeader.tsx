import React from 'react';
import styles from './productsHeader.module.css';

function ProductsHeader(): JSX.Element {
    return (
        <header className={styles.productsHeader}>
            <h1 className={styles.title}>Products</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={styles.divider}></div>
                <button className={styles.newCategoryButton}>Add category</button>
                <button className={styles.newProductButton}>Add products</button>
            </div>
        </header>
    )
}

export default ProductsHeader;