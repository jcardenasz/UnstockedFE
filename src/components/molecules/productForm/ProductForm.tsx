/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */

import React, { useState } from 'react';
import styles from './productForm.module.css';
import Swal from 'sweetalert2';
import { addProduct, updateProduct } from '@/services/product.service';

interface ProductFormProps {

    setProductSummaryIsOpen?: (val: boolean) => void,
    setProductEditIsOpen?: (val: boolean) => void,
    setAddProductIsOpen?: (val: boolean) => void,
    categoriesList: any,
    isEdit?: boolean,
    productSelected?: any
}

function ProductForm({ categoriesList, setAddProductIsOpen, setProductSummaryIsOpen, setProductEditIsOpen, isEdit = false, productSelected }: ProductFormProps): JSX.Element {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPicture, setProductPicture] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productStock, setProductStock] = useState(0);
    const [categoryName, setCategoryName] = useState('');

    const handleAddProductSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const res = await addProduct(productName, productDescription, productStock, productPicture, productPrice, categoryName);
        let data;

        if (res.status !== 500) {
            data = await res.json()
            if (!res.ok) {
                void Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error[0]
                })
            }
        } else {
            data = {
                error: 'Product Already Exists'
            }
            if (!res.ok) {
                void Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error
                })
            }
        }

        if ((res).ok) {
            void Toast.fire({
                icon: 'success',
                title: 'Product created successfully'
            })
            setProductName('');
            setProductDescription('');
            setProductPicture('');
            setProductPrice(0);
            setProductStock(0);
            setCategoryName('');
            if (setAddProductIsOpen !== undefined) {
                setAddProductIsOpen(false);
            }
        }
    };

    const handleUpdateProductSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const res = await updateProduct(productSelected?.id ?? '', productName, productDescription, productStock, productPicture, productPrice, categoryName);
        let data;

        if (res.status !== 500) {
            data = await res.json()
            if (!res.ok) {
                void Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error[0]
                })
            }
        } else {
            data = {
                error: 'Something went wrong'
            }
            if (!res.ok) {
                void Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error
                })
            }
        }

        if ((res).ok) {
            void Toast.fire({
                icon: 'success',
                title: 'Product updated successfully'
            })
            setProductName('');
            setProductDescription('');
            setProductPicture('');
            setProductPrice(0);
            setProductStock(0);
            setCategoryName('');
            if (setAddProductIsOpen !== undefined) {
                setAddProductIsOpen(false);
            }
            if (setProductSummaryIsOpen !== undefined) {
                setProductSummaryIsOpen(false);
            }
            if (setProductEditIsOpen !== undefined) {
                setProductEditIsOpen(false);
            }
        }
    };

    const handleGoBack = (): void => {
        if (setProductSummaryIsOpen !== undefined) {
            setProductSummaryIsOpen(true);
        }
        if (setProductEditIsOpen !== undefined) {
            setProductEditIsOpen(false);
        }
    }

    return (

        <form className={styles.form} onSubmit={isEdit ? (e) => { void handleUpdateProductSubmit(e) } : handleAddProductSubmit}>
            <label className={styles.newLabel}>Product Name*</label>
            <input
                onChange={(e) => { setProductName(e.target.value) }}
                className={styles.newInput}
                placeholder={productSelected?.name !== undefined ? productSelected?.name : 'Name of your product'}
                required
            />
            <label className={styles.newLabel}>Product Image*</label>
            <input
                onChange={(e) => { setProductPicture(e.target.value) }}
                className={styles.newInput}
                placeholder={productSelected?.picture !== undefined ? productSelected?.picture : 'Link to your image'}
                required
            />
            <label className={styles.newLabel}>Price*</label>
            <input
                onChange={(e) => {
                    setProductPrice(parseInt(e.target.value))
                }} className={styles.
                    newInput} type='number' placeholder={productSelected?.price !== undefined ? productSelected?.price : '0'}
                required
            />
            <label className={styles.newLabel}>Amount*</label>
            <input
                onChange={(e) => {
                    setProductStock(parseInt(e.target.value))
                }} className={styles.
                    newInput} type='number' placeholder={productSelected?.stock !== undefined ? productSelected?.stock : '0'}
                required
            />
            <label className={styles.newLabel}>Category*</label>
            <select onChange={(e) => { setCategoryName(e.target.value) }} className={styles.selectCategory}>
                <option key={0}>Without category</option>
                {categoriesList?.map((category: { id: string, name: string }) =>
                    <option key={category.id}>{category.name}</option>
                )}
            </select>
            <label className={styles.newLabel}>Description*</label>
            <textarea
                onChange={(e) => { setProductDescription(e.target.value) }}
                className={styles.newTextArea}
                placeholder={productSelected?.description !== undefined ? productSelected?.description : 'Add a description of your product'}
                required
            />
            <button className={styles.newCategorySubmitButton}>{isEdit ? 'Update Product' : 'Add Product'}</button>
            {isEdit && <button className={styles.goBackButton} onClick={handleGoBack}>Go back</button>}
        </form>
    )
}

export default ProductForm;