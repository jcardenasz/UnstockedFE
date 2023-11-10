import React from 'react';
import styles from './transactionsSummary.module.css';
import SummaryCard from '@/components/atoms/summaryCard/SummaryCard';

function TransactionsSummary(): JSX.Element {
    return (
        <div className={styles.container}>
            <SummaryCard title='Balance' value={0} type='profit' />
            <SummaryCard title='Total Sales' value={0} type='profit' />
            <SummaryCard title='Total Costs' value={0} type='loss' />
        </div>
    )
}

export default TransactionsSummary;