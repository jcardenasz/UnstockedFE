import React from "react";
import styles from "./transactionsHeader.module.css";

function TransactionsHeader(): JSX.Element {
    return (
        <header className={styles.transactionsHeader}>
            <h1 className={styles.title}>Transactions</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={styles.divider}></div>
                <button className={styles.newSaleButton}>New Sale</button>
                <button className={styles.newExpenseButton}>New Expense</button>
            </div>
        </header>
    )
}

export default TransactionsHeader;