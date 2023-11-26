'use client'
import React, { useState } from "react";
import styles from "./transactionsHeader.module.css";
import RightBar from "../rightBar/RightBar";

export interface TransactionsHeaderProps {
    _handleAddSale: () => void;
    _handleAddExpense: () => void;
}

function TransactionsHeader({_handleAddSale,_handleAddExpense}: TransactionsHeaderProps): JSX.Element {

    const [addSaleIsOpen, setAddSaleIsOpen] = useState(false);
    const [addExpenseIsOpen, setAddExpenseIsOpen] = useState(false);
    
    return (
        <>
            <header className={styles.transactionsHeader}>
                <h1 className={styles.title}>Transactions</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.divider}></div>
                    <button onClick={_handleAddSale} className={styles.newSaleButton}>New Sale</button>
                    <button onClick={_handleAddExpense} className={styles.newExpenseButton}>New Expense</button>
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