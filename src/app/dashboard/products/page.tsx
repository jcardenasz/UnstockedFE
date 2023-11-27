/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'
import ProductsHeader from '@/components/atoms/productsHeader/ProductsHeader';
import ProductsSummary from '@/components/molecules/productsSummary/ProductsSummary';
import React, { useEffect, useState } from 'react';
import RightBar from '@/components/atoms/rightBar/RightBar';
import { useSession } from 'next-auth/react';
import { getCategories } from '@/services/category.service';
import AddCategoryForm from '@/components/molecules/addCategoryForm/AddCategoryForm';
import EditCategoryPanel from '@/components/molecules/editCategoryPanel/EditCategoryPanel';
import ProductsGrid from '@/components/molecules/productsGrid/ProductsGrid';
import ProductForm from '@/components/molecules/addProductForm/ProductForm';

// import { useRouter } from 'next/navigation'

/**
 * Esta es la pantalla de inicio
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Products(): JSX.Element {

    const [categoriesList, setCategoriesList] = useState();

    const [totalProducts, setTotalProducts] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [addCategoryIsOpen, setAddCategoryIsOpen] = useState(false);
    const [addProductIsOpen, setAddProductIsOpen] = useState(false);
    const [editCategoryIsOpen, setEditCategoryIsOpen] = useState(false);


    /* function getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    } */

    /* const productsList = [
        {
            id: "656393458e0bb84c89a01fce",
            name: "productoPrueba1",
            description: "Increíble producto de prueba 1",
            stock: 25,
            picture: `https://picsum.photos/id/110/300/300`,
            price: 5000,
            userId: "653c0608195e0930f96230f7",
            createdAt: "2023-11-26T18:49:41.082Z",
            updatedAt: "2023-11-26T18:49:41.082Z",
            v: 0
        },
    ] */

    const { data: session, status } = useSession();

    console.log({ session, status });

    const newCategoriesList: any = [];


    useEffect(() => {
        void fetchCategoriesData();
    }, [addCategoryIsOpen, editCategoryIsOpen, addProductIsOpen]);


    const fetchCategoriesData = async () => {
        try {
            const response = await getCategories();
            const resultStr = JSON.stringify(response);
            const resultObj = JSON.parse(resultStr);
            for (let i = 0; i < resultObj.length; i++) {
                newCategoriesList.push({ id: resultObj[i]._id, name: resultObj[i].name })
            }
            setCategoriesList(newCategoriesList);
        } catch (error) {
            console.error('Error fetching categories data:', error);
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
            <ProductsSummary handleEditCategory={handleEditCategory} categoriesList={categoriesList} totalProducts={totalProducts} totalCost={totalCost} />
            <ProductsGrid categoriesList={categoriesList} addProductIsOpen={addProductIsOpen} setTotalProducts={setTotalProducts} setTotalCost={setTotalCost} />
            <RightBar isOpen={addCategoryIsOpen} setIsOpen={setAddCategoryIsOpen} title='Add Category'>
                <AddCategoryForm setAddCategoryIsOpen={setAddCategoryIsOpen} />
            </RightBar>
            <RightBar isOpen={addProductIsOpen} setIsOpen={setAddProductIsOpen} title='Add Product'>
                <ProductForm categoriesList={categoriesList} setAddProductIsOpen={setAddProductIsOpen} />
            </RightBar>
            <RightBar isOpen={editCategoryIsOpen} setIsOpen={setEditCategoryIsOpen} title='Edit Category'>
                <EditCategoryPanel setAddCategoryIsOpen={setAddCategoryIsOpen} setEditCategoryIsOpen={setEditCategoryIsOpen} categoriesList={categoriesList} />
            </RightBar>
        </>
    )
}
