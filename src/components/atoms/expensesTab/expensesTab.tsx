/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import styles from '@/components/atoms/incomesTab/incomesTab.module.css';
import { getExpenses } from '@/services/expense.service';

interface ExpensesTabProps {
    expenses: any
}
function ExpensesTab({ expenses }: ExpensesTabProps): JSX.Element {

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.header}>Concept</th>
                        <th className={styles.header}>Value</th>
                        <th className={styles.header}>Payment Method</th>
                        <th className={styles.header}>Date</th>
                        <th className={styles.header}>Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses?.map((expenses: { id: string, name: string, expenseAmount: number, paymentMethod: string, date: string, supplier: string }) => (
                        <tr className={styles.tableRow} key={expenses.id}>
                            <td>{expenses.name}</td> {/* Concept */}
                            <td>{expenses.expenseAmount.toLocaleString('de-DE')}</td> {/* Value */}
                            <td>{expenses.paymentMethod}</td> {/* Payment Method */}
                            <td>{expenses.date}</td> {/* Date */}
                            <td>{expenses.supplier}</td> {/* Supplier */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ExpensesTab;