'use client'

import React, { useState } from 'react';
import styles from './tabsList.module.css';

function TabsList(): JSX.Element {

    const [isIncomesSelected, setIsIncomesSelected] = useState(true);
    const [isExpensesSelected, setIsExpensesSelected] = useState(false);

    const stylesIncomesTab = `${styles.tab} ${isIncomesSelected ? styles.selected : ''}`;
    const stylesExpensesTab = `${styles.tab} ${isExpensesSelected ? styles.selected : ''}`;

    const bottomBarSelected = `${isIncomesSelected ? styles.bottomBarIncomesSelected : styles.bottomBarExpensesSelected}`;
    const bottomBarStyles = `${styles.bottomBar} ${bottomBarSelected}`;

    return (
        <div style={{ padding: '0px 24px' }}>
            <div className={styles.container}>
                <div onClick={() => { setIsIncomesSelected(true); setIsExpensesSelected(false) }} className={stylesIncomesTab}>
                    <p>Incomes</p>
                </div>
                <div onClick={() => { setIsIncomesSelected(false); setIsExpensesSelected(true) }} className={stylesExpensesTab}>
                    <p>Expenses</p>
                </div>
            </div>
            <span className={bottomBarStyles}></span>
        </div>

    )
}

export default TabsList;