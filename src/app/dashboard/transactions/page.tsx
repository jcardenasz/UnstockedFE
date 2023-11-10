import TabsList from '@/components/atoms/tabsList/TabsList';
import TransactionsHeader from '@/components/atoms/transactionsHeader/TransactionsHeader';
import FiltersBar from '@/components/molecules/filtersBar/FiltersBar';
import TransactionsSummary from '@/components/molecules/transactionsSummary/TransactionsSummary';
import React from 'react';

// import { useRouter } from 'next/navigation'

/**
 * Transactions page
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Transactions(): JSX.Element {

    return (
        <>
            <TransactionsHeader />
            <TransactionsSummary /> {/* Balance / Total sales / Total expenses */}
            <FiltersBar /> {/* Filters button / Input interval filter / Input dates filter / Search bar */}
            <TabsList /> {/* Income / Outcome */}
            {/* Items List */}
        </>
    )
}
