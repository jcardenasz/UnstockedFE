/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './editCategoryPanel.module.css';
import Swal from 'sweetalert2';
import { deleteCategory } from '@/services/category.service';

interface EditCategoryPanelProps {
    setEditCategoryIsOpen: (val: boolean) => void,
    setAddCategoryIsOpen: (val: boolean) => void,
    categoriesList: any,
}

function EditCategoryPanel({ categoriesList, setEditCategoryIsOpen, setAddCategoryIsOpen }: EditCategoryPanelProps): JSX.Element {

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

    const handleAddCategory = (): void => {
        setEditCategoryIsOpen(false);
        setAddCategoryIsOpen(true);
    }

    async function handleDeleteCategory(id: string): Promise<void> {
        const res = await deleteCategory(id);
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
                error: 'Category not found'
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
                title: 'Category deleted successfully'
            })
            // setCategoryName('');
            setEditCategoryIsOpen(false);
        }
    };

    return (
        <div className={styles.rightBarInfoContainer}>
            <ul className={styles.ul}>
                {categoriesList.map((category: { id: string, name: string }) => (
                    <li className={styles.li} key={category.id}>
                        <p>{category.name}</p>
                        <button onClick={() => { void handleDeleteCategory(category.id) }} className={styles.deleteButton}>
                            <MdDelete />
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddCategory} className={styles.newCategorySubmitButton}>Create category</button>
        </div>
    )
}

export default EditCategoryPanel;