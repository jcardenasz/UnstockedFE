/* eslint-disable @typescript-eslint/no-misused-promises */
import { addCategory } from '@/services/category.service';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './addCategoryForm.module.css';

function AddCategoryForm(): JSX.Element {

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

        if ((res).ok) {
            void Toast.fire({
                icon: 'success',
                title: 'Category created successfully'
            })
        }
    };

    return (
        <form className={styles.form} action='#' onSubmit={handleAddCategorySubmit} >
            <label className={styles.newLabel}>Category Name*</label>
            <input onChange={(e) => { setCategoryName(e.target.value); }} className={styles.newInput} type='text' placeholder='Write the name of your new category' required />
            <button className={styles.newCategorySubmitButton}>Add category</button>
        </form>
    )
}

export default AddCategoryForm;