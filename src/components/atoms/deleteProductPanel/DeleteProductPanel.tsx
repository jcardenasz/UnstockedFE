/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './deleteProductPanel.module.css';
import { IoWarningOutline } from 'react-icons/io5';
import { deleteProduct } from '@/services/product.service';
import Swal from 'sweetalert2';

interface DeleteProductPanelProps {
    productSelected: any,
    setProductSelected: (val: any) => void,
    setProductSummaryIsOpen: (val: boolean) => void,
    setProductDeleteIsOpen: (val: boolean) => void
}
function DeleteProductPanel({ productSelected, setProductSelected, setProductSummaryIsOpen, setProductDeleteIsOpen }: DeleteProductPanelProps): JSX.Element {

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

    async function handleDeleteProduct(id: string): Promise<void> {
        const res = await deleteProduct(id);
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
                error: 'Product not found'
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
                title: 'Product deleted successfully'
            })
            setProductSelected({
                id: '',
                name: '',
                description: '',
                stock: 0,
                picture: '',
                category: '',
                price: 0,
            });
            setProductDeleteIsOpen(false);
            setProductSummaryIsOpen(false);
        }
    };

    const handleGoBack = (): void => {
        setProductSummaryIsOpen(true);
        setProductDeleteIsOpen(false);
    }

    return (
        <div className={styles.infoContainer} >
            <div style={{ color: 'red', marginTop: '15px' }}>
                <IoWarningOutline size={100} />
            </div>
            <p className={styles.important}>Are you sure you want to delete the product {`"${productSelected.name}"`} ? </p>
            <p className={styles.text}>Once the product is deleted you won't be able to retrieve the information again</p>
            <button onClick={() => { void handleDeleteProduct(productSelected.id) }} className={styles.deleteButton}>Delete</button>
            <button onClick={handleGoBack} className={styles.goBackButton}>Go back</button>
        </div>
    )
}

export default DeleteProductPanel;