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

    const { data: session, status } = useSession();

    console.log({ session, status });

    const newList: any = [];

    useEffect(() => {
        void fetchData();
    }, [addCategoryIsOpen, editCategoryIsOpen]);

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
        try {
            console.log('Categories list: ', categoriesList);
            const response = await getCategories();
            const resultStr = JSON.stringify(response);
            const resultObj = JSON.parse(resultStr);
            console.log('Lista de categorias: ', resultObj)
            for (let i = 0; i < resultObj.length; i++) {
                // console.log('new list before push: ', newList);
                newList.push({ id: resultObj[i]._id, name: resultObj[i].name })
                // console.log('new list after push: ', newList);
                // newList = [...newList, ];
            }
            setCategoriesList(newList);
            console.log('new list after push: ', newList);
            console.log('Categories list after fetch: ', categoriesList);
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
            {/* Products grid */}
            <RightBar isOpen={addCategoryIsOpen} setIsOpen={setAddCategoryIsOpen} title='Add Category'>
                <AddCategoryForm setAddCategoryIsOpen={setAddCategoryIsOpen} />
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
                <EditCategoryPanel setAddCategoryIsOpen={setAddCategoryIsOpen} setEditCategoryIsOpen={setEditCategoryIsOpen} categoriesList={categoriesList} />
            </RightBar>
        </>
    )
}
