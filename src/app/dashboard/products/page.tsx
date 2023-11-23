'use client'
import ProductsHeader from '@/components/atoms/productsHeader/ProductsHeader';
import ProductsSummary from '@/components/molecules/productsSummary/ProductsSummary';
import styles from './products.module.css';
import React, { useState } from 'react';
import RightBar from '@/components/atoms/rightBar/RightBar';
import { IoIosArrowForward } from 'react-icons/io';

// import { useRouter } from 'next/navigation'

/**
 * Esta es la pantalla de inicio
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Products(): JSX.Element {

    const [addCategoryIsOpen, setAddCategoryIsOpen] = useState(false);
    const [addProductIsOpen, setAddProductIsOpen] = useState(false);
    const [editCategoryIsOpen, setEditCategoryIsOpen] = useState(false);

    const categoriesList = ['Op 1', 'Op 2', 'Op 3', 'Op 4', 'Op 5', 'Op 6', 'Op 7', 'Op 8', 'Op 9', 'Op 10'];

    const handleAddCategory = (): void => {
        setAddCategoryIsOpen(true);
    }

    const handleAddProduct = (): void => {
        setAddProductIsOpen(true);
    }

    const handleEditCategory = (): void => {
        setEditCategoryIsOpen(true);
    }

    return (
        <>
            <ProductsHeader handleAddCategory={handleAddCategory} handleAddProduct={handleAddProduct} />
            <ProductsSummary handleEditCategory={handleEditCategory} categoriesList={categoriesList} />
            {/* Products grid */}
            <RightBar isOpen={addCategoryIsOpen} setIsOpen={setAddCategoryIsOpen} title='Add Category'>
                <form className={styles.form}>
                    <label className={styles.newLabel}>Category Name*</label>
                    <input className={styles.newInput} type='text' placeholder='Write the name of your new category' required />
                    <button className={styles.newCategorySubmitButton}>Add category</button>
                </form>
            </RightBar>
            <RightBar isOpen={addProductIsOpen} setIsOpen={setAddProductIsOpen} title='Add Product'>
                <form className={styles.form}>
                    <label className={styles.newLabel}>Product Name*</label>
                    <input className={styles.newInput} placeholder='Name of your product' required />
                    <label className={styles.newLabel}>Price*</label>
                    <input className={styles.newInput} type='number' placeholder='0' required />
                    <label className={styles.newLabel}>Amount*</label>
                    <input className={styles.newInput} type='number' placeholder='0' required />
                    <label className={styles.newLabel}>Description*</label>
                    <textarea className={styles.newTextArea} placeholder='Add a description of your product' required />
                    <button className={styles.newCategorySubmitButton}>Add product</button>
                </form>
            </RightBar>
            <RightBar isOpen={editCategoryIsOpen} setIsOpen={setEditCategoryIsOpen} title='Edit Category'>
                <div className={styles.rightBarInfoContainer}>
                    <ul className={styles.ul}>
                        {categoriesList.map(category => (
                            <li className={styles.li} key={category}><p>{category}</p><IoIosArrowForward /></li>
                        ))}
                    </ul>
                    <button className={styles.newCategorySubmitButton}>Create category</button>
                </div>
            </RightBar>
        </>
    )
}
