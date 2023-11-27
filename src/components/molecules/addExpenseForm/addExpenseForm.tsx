/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './addExpenseForm.module.css';
import { addExpense } from '@/services/expense.service';
import PaymentMethodGrid from '@/components/molecules/paymentMethodGrid/PaymentMethodGrid';

function AddExpenseForm({ setAddExpenseIsOpen }: { setAddExpenseIsOpen: (val: boolean) => void }): JSX.Element {

    const [ExpenseName, setExpenseName] = useState('');
    const [ExpenseDescription, setExpenseDescription] = useState('');
    const [ExpensePaymentMethod, setExpensePaymentMethod] = useState('');
    const [ExpenseSupplier, setExpenseSupplier] = useState('');
    const [ExpenseAmount, setExpenseAmount] = useState('');

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
        const res = await addExpense(ExpenseName, ExpenseDescription, ExpensePaymentMethod, Number(ExpenseAmount),ExpenseSupplier);
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
                title: 'Expense created successfully'
            })
            setExpenseName('');
            setAddExpenseIsOpen(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleAddExpenseSubmit} >
            <div>
                <label className={styles.newLabel}>Expense Name*</label>
                <input onChange={(e) => { setExpenseName(e.target.value); }} className={styles.newInput} type='text' placeholder='Write the name of your new Expense' required />
                <label className={styles.newLabel}>Payment Method*</label>
            </div>
            <PaymentMethodGrid />
            <div>
            <input onChange={(e) => { setExpensePaymentMethod(e.target.value); }} className={styles.newInput} type='text' placeholder='Write one of the options' required />
                <label className={styles.newLabel}>Amount*</label>
                <input onChange={(e) => { setExpenseAmount(e.target.value); }} className={styles.newInput} type='number' placeholder='0' required />
                <label className={styles.newLabel}>Supplier*</label>
                <input onChange={(e) => { setExpenseSupplier(e.target.value); }} className={styles.newInput} type='text' placeholder='Writte the supplier' required />
                <label className={styles.newLabel}>Description*</label>
                <input onChange={(e) => { setExpenseDescription(e.target.value); }} className={styles.newInput} type='text' placeholder='Write the description of your new Expense' required />
                <button className={styles.newExpenseSubmitButton} type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default AddExpenseForm;