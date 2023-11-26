/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './addCategoryForm.module.css';
import { addExpense } from '@/services/expense.service';

function AddExpenseForm({ setAddExpenseIsOpen }: { setAddExpenseIsOpen: (val: boolean) => void }): JSX.Element {

    const [ExpenseName, setExpenseName] = useState('');
    const [ExpenseDescription, setExpenseDescription] = useState('');
    const [ExpensePaymentMethod, setExpensePaymentMethod] = useState('');
    const [ExpenseSupplier, setExpenseSupplier] = useState('');
    const [ExpensePrice, setExpensePrice] = useState('');

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

    const handleAddExpenseSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const res = await addExpense(ExpenseName, ExpenseDescription, ExpensePaymentMethod, Number(ExpensePrice),ExpenseSupplier);
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
            setExpenseName('');
            setAddExpenseIsOpen(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleAddExpenseSubmit} >
            <label className={styles.newLabel}>Expense Name*</label>
            <input onChange={(e) => { setExpenseName(e.target.value); }} className={styles.newInput} type='text' placeholder='Write the name of your new Expense' required />
            <label className={styles.newLabel}>Payment Method*</label>
            <input onChange={(e) => { setExpensePaymentMethod(e.target.value); }} className={styles.newInput} type='checkbox' placeholder='' required />
            <label className={styles.newLabel}>*</label>
            <input onChange={(e) => { setExpensePrice(e.target.value); }} className={styles.newInput} type='number' placeholder='0' required />
            <label className={styles.newLabel}>Amount*</label>
            <input onChange={(e) => { setExpenseSupplier(e.target.value); }} className={styles.newInput} type='text' placeholder='Writte the supplier' required />
            <label className={styles.newLabel}>Description*</label>
            <input onChange={(e) => { setExpenseDescription(e.target.value); }} className={styles.newInput} type='text' placeholder='Write the description of your new Expense' required />
            <button className={styles.newExpenseSubmitButton}>Add Expense</button>
        </form>
    )
}

export default AddExpenseForm;