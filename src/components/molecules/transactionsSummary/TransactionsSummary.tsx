import React from 'react';
import styles from './transactionsSummary.module.css';
import SummaryCard from '@/components/atoms/summaryCard/SummaryCard';

interface TransactionsSummaryProps {
    balance: number,
    totalSales: number,
    totalExpenses: number
}

function TransactionsSummary({ balance, totalSales, totalExpenses }: TransactionsSummaryProps): JSX.Element {
    return (
        <div className={styles.container}>
            <SummaryCard title='Balance' value={balance} type='balance' />
            <SummaryCard title='Total Sales' value={totalSales} type='profit' />
            <SummaryCard title='Total Costs' value={totalExpenses} type='loss' />
        </div>
    )
}

export default TransactionsSummary;