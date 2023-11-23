'use client'
import React, { useState } from "react";
import styles from "./transactionsHeader.module.css";
import RightBar from "../rightBar/RightBar";

function TransactionsHeader(): JSX.Element {

    const [addSaleIsOpen, setAddSaleIsOpen] = useState(false);
    const [addExpenseIsOpen, setAddExpenseIsOpen] = useState(false);

    const handleAddSale = (): void => {
        setAddSaleIsOpen(true);
    }

    const handleAddExpense = (): void => {
        setAddExpenseIsOpen(true);
    }

    return (
        <>
            <header className={styles.transactionsHeader}>
                <h1 className={styles.title}>Transactions</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.divider}></div>
                    <button onClick={handleAddSale} className={styles.newSaleButton}>New Sale</button>
                    <button onClick={handleAddExpense} className={styles.newExpenseButton}>New Expense</button>
                </div>
            </header>
            <RightBar isOpen={addSaleIsOpen} setIsOpen={setAddSaleIsOpen} title='Add Sale'>
                <p>Add Sale</p>
            </RightBar>
            <RightBar isOpen={addExpenseIsOpen} setIsOpen={setAddExpenseIsOpen} title='Add Expense'>
                <p>Add Expense</p>
            </RightBar>
        </>
    )
}

export default TransactionsHeader;