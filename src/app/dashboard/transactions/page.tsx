'use client'
import TabsList from '@/components/atoms/tabsList/TabsList';
import TransactionsHeader from '@/components/atoms/transactionsHeader/TransactionsHeader';
import FiltersBar from '@/components/molecules/filtersBar/FiltersBar';
import TransactionsSummary from '@/components/molecules/transactionsSummary/TransactionsSummary';
import React from 'react';
import RightBar from '@/components/atoms/rightBar/RightBar';
import AddSaleForm from '@/components/molecules/addSaleForm/addSaleForm';
import AddExpenseForm from '@/components/molecules/addExpenseForm/addExpenseForm';

// import { useRouter } from 'next/navigation'

/**
 * Transactions page
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Transactions(): JSX.Element {

    

    const [addSaleIsOpen, setAddSaleIsOpen] = React.useState(false);
    const [addExpenseIsOpen, setAddExpenseIsOpen] = React.useState(false);


    const handleAddExpense = (): void => {
        setAddExpenseIsOpen(true);
    }

    const handleAddSale = (): void => {
        setAddSaleIsOpen(true);
    }

    return (
        <>
            <TransactionsHeader _handleAddSale={handleAddSale} _handleAddExpense={handleAddExpense}/>
            <TransactionsSummary/> {/* Balance / Total sales / Total expenses */}
            <FiltersBar /> {/* Filters button / Input interval filter / Input dates filter / Search bar */}
            <TabsList /> {/* Income / Outcome */}
            {/* Items List */}
            <RightBar isOpen={addSaleIsOpen} setIsOpen={setAddSaleIsOpen} title='Add Sale'>
                <AddSaleForm setAddSaleIsOpen={setAddSaleIsOpen} />
            </RightBar>
            <RightBar isOpen={addExpenseIsOpen} setIsOpen={setAddExpenseIsOpen} title='Add Expense'>
                <AddExpenseForm setAddExpenseIsOpen={setAddExpenseIsOpen} />
            </RightBar>
        </>
    )
}
