/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './addSaleForm.module.css';
import { addSale } from '@/services/sale.service';

function AddSaleForm({ setAddSaleIsOpen }: { setAddSaleIsOpen: (val: boolean) => void }): JSX.Element {

    const [saleName, setSaleName] = useState('');
    const [saleDescription, setSaleDescription] = useState('');
    const [salePaymentMethod, setSalePaymentMethod] = useState('');
    const [saleAmount, setSaleAmount] = useState('');
    const [salePrice, setSalePrice] = useState('');

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

    const handleAddSaleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const res = await addSale(saleName, saleDescription, salePaymentMethod, Number(saleAmount), Number(salePrice));
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
                error: 'This transaction Already Exists'
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
                title: 'Category created successfully'
            })
            setSaleName('');
            setAddSaleIsOpen(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleAddSaleSubmit} >
            <label className={styles.newLabel}>Sale Name*</label>
            <input onChange={(e) => { setSaleName(e.target.value); }} className={styles.newInput} type='text' placeholder='Write the name of your new sale' required />
            <label className={styles.newLabel}>Payment Method*</label>
            <input onChange={(e) => { setSalePaymentMethod(e.target.value); }} className={styles.newInput} type='checkbox' placeholder='' required />
            <label className={styles.newLabel}>Value*</label>
            <input onChange={(e) => { setSalePrice(e.target.value); }} className={styles.newInput} type='number' placeholder='0' required />
            <label className={styles.newLabel}>Amount*</label>
            <input onChange={(e) => { setSaleAmount(e.target.value); }} className={styles.newInput} type='number' placeholder='0' required />
            <label className={styles.newLabel}>Description*</label>
            <input onChange={(e) => { setSaleDescription(e.target.value); }} className={styles.newInput} type='text' placeholder='Write the description of your new sale' required />
            <button className={styles.newSaleSubmitButton}>Add sale</button>
        </form>
    )
}

export default AddSaleForm;