'use client'
import ProductsHeader from '@/components/atoms/productsHeader/ProductsHeader';
import ProductsSummary from '@/components/molecules/productsSummary/ProductsSummary';
import styles from './products.module.css';
import React, { useEffect, useState } from 'react';
import RightBar from '@/components/atoms/rightBar/RightBar';
import { useSession } from 'next-auth/react';
import { getCategories } from '@/services/category.service';
import AddCategoryForm from '@/components/molecules/addCategoryForm/AddCategoryForm';
import EditCategoryPanel from '@/components/molecules/editCategoryPanel/EditCategoryPanel';
import ProductsGrid from '@/components/molecules/productsGrid/ProductsGrid';

// import { useRouter } from 'next/navigation'

/**
 * Esta es la pantalla de inicio
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Products(): JSX.Element {

    const [categoriesList, setCategoriesList] = useState();
    const [addCategoryIsOpen, setAddCategoryIsOpen] = useState(false);
    const [addProductIsOpen, setAddProductIsOpen] = useState(false);
    const [editCategoryIsOpen, setEditCategoryIsOpen] = useState(false);

    const productsList = [
        {
            id: "656393458e0bb84c89a01fce",
            name: "productoPrueba1",
            description: "Increíble producto de prueba 1",
            stock: 25,
            picture: "https://imgs.search.brave.com/8WORFhnF6UELgJxac7Nuk6JpuFN8V8QEUGgqV9WDShg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE3MzkxMzUzL3Iv/aWwvNjUwNGMxLzM1/MzEwNjkyNzMvaWxf/NjAweDYwMC4zNTMx/MDY5MjczX3RoYXEu/anBn",
            price: 5000,
            userId: "653c0608195e0930f96230f7",
            createdAt: "2023-11-26T18:49:41.082Z",
            updatedAt: "2023-11-26T18:49:41.082Z",
            v: 0
        },
        {
            id: "656393e88e0bb84c89a01fd4",
            name: "productoPrueba2",
            description: "Increíble producto de prueba 2",
            stock: 45,
            picture: "https://imgs.search.brave.com/8WORFhnF6UELgJxac7Nuk6JpuFN8V8QEUGgqV9WDShg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE3MzkxMzUzL3Iv/aWwvNjUwNGMxLzM1/MzEwNjkyNzMvaWxf/NjAweDYwMC4zNTMx/MDY5MjczX3RoYXEu/anBn",
            price: 8000,
            userId: "653c0608195e0930f96230f7",
            createdAt: "2023-11-26T18:52:24.526Z",
            updatedAt: "2023-11-26T18:52:24.526Z",
            v: 0
        },
        {
            id: "656393f18e0bb84c89a01fd8",
            name: "productoPrueba3",
            description: "Increíble producto de prueba 3",
            stock: 45,
            picture: "https://imgs.search.brave.com/8WORFhnF6UELgJxac7Nuk6JpuFN8V8QEUGgqV9WDShg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE3MzkxMzUzL3Iv/aWwvNjUwNGMxLzM1/MzEwNjkyNzMvaWxf/NjAweDYwMC4zNTMx/MDY5MjczX3RoYXEu/anBn",
            price: 10000,
            userId: "653c0608195e0930f96230f7",
            createdAt: "2023-11-26T18:52:33.070Z",
            updatedAt: "2023-11-26T18:52:33.070Z",
            v: 0
        },
        {
            id: "656393fb8e0bb84c89a01fdc",
            name: "productoPrueba4",
            description: "Increíble producto de prueba 4",
            stock: 10,
            picture: "https://imgs.search.brave.com/8WORFhnF6UELgJxac7Nuk6JpuFN8V8QEUGgqV9WDShg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE3MzkxMzUzL3Iv/aWwvNjUwNGMxLzM1/MzEwNjkyNzMvaWxf/NjAweDYwMC4zNTMx/MDY5MjczX3RoYXEu/anBn",
            price: 10000,
            userId: "653c0608195e0930f96230f7",
            createdAt: "2023-11-26T18:52:43.576Z",
            updatedAt: "2023-11-26T18:52:43.576Z",
            v: 0
        }
    ]

    const { data: session, status } = useSession();

    console.log({ session, status });

    const newList: any = [];

    useEffect(() => {
        void fetchCategoriesData();
    }, [addCategoryIsOpen, editCategoryIsOpen]);

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchCategoriesData = async () => {
        try {
            const response = await getCategories();
            const resultStr = JSON.stringify(response);
            const resultObj = JSON.parse(resultStr);
            for (let i = 0; i < resultObj.length; i++) {
                newList.push({ id: resultObj[i]._id, name: resultObj[i].name })
            }
            setCategoriesList(newList);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


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
            <ProductsGrid productsList={productsList} />
            <RightBar isOpen={addCategoryIsOpen} setIsOpen={setAddCategoryIsOpen} title='Add Category'>
                <AddCategoryForm setAddCategoryIsOpen={setAddCategoryIsOpen} />
            </RightBar>
            <RightBar isOpen={addProductIsOpen} setIsOpen={setAddProductIsOpen} title='Add Product'>
                <form className={styles.form}>
                    <label className={styles.newLabel}>Product Name*</label>
                    <input className={styles.newInput} placeholder='Name of your product' required />
                    <label className={styles.newLabel}>Product Image*</label>
                    <input className={styles.newInput} placeholder='Link to your image' required />
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
                <EditCategoryPanel setAddCategoryIsOpen={setAddCategoryIsOpen} setEditCategoryIsOpen={setEditCategoryIsOpen} categoriesList={categoriesList} />
            </RightBar>
        </>
    )
}
