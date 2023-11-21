'use client'

import React, { useState } from 'react';
import styles from './productsHeader.module.css';
import RightBar from '../rightBar/RightBar';

function ProductsHeader(): JSX.Element {

    const [addCategoryIsOpen, setAddCategoryIsOpen] = useState(false);
    const [addProductIsOpen, setAddProductIsOpen] = useState(false);

    const handleAddCategory = (): void => {
        setAddCategoryIsOpen(true);
    }

    const handleAddProduct = (): void => {
        setAddProductIsOpen(true);
    }



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
            <RightBar isOpen={addCategoryIsOpen} setIsOpen={setAddCategoryIsOpen} title='Add Category'>
                <label>Category Name *</label>
                <input />
            </RightBar>
            <RightBar isOpen={addProductIsOpen} setIsOpen={setAddProductIsOpen} title='Add Product'>
                <p>Add Product</p>
            </RightBar>
        </>

    )
}

export default ProductsHeader;