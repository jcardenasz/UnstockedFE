import React from 'react';
import styles from './ExpensesTab.module.css';

function ExpensesTab(): JSX.Element {
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
                    {/* Here you would map over your data and create a row for each item */}
                </tbody>
            </table>
        </div>
    );
}

export default ExpensesTab;