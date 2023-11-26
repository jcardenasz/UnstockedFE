/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { addCategory } from '@/services/category.service';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './addCategoryForm.module.css';

function AddCategoryForm({ setAddCategoryIsOpen }: { setAddCategoryIsOpen: (val: boolean) => void }): JSX.Element {

    const [categoryName, setCategoryName] = useState('');

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

    const handleAddCategorySubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const res = await addCategory(categoryName);
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
                error: 'Category Already Exists'
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
            setCategoryName('');
            setAddCategoryIsOpen(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleAddCategorySubmit} >
            <label className={styles.newLabel}>Category Name*</label>
            <input onChange={(e) => { setCategoryName(e.target.value); }} className={styles.newInput} type='text' placeholder='Write the name of your new category' required />
            <button className={styles.newCategorySubmitButton}>Add category</button>
        </form>
    )
}

export default AddCategoryForm;