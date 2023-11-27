/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'
import TabsList from '@/components/molecules/tabsList/TabsList';
import TransactionsHeader from '@/components/atoms/transactionsHeader/TransactionsHeader';
import FiltersBar from '@/components/molecules/filtersBar/FiltersBar';
import TransactionsSummary from '@/components/molecules/transactionsSummary/TransactionsSummary';
import React, { useEffect, useState } from 'react';
import RightBar from '@/components/atoms/rightBar/RightBar';
import AddSaleForm from '@/components/molecules/addSaleForm/AddSaleForm';
import AddExpenseForm from '@/components/molecules/addExpenseForm/addExpenseForm';
import { getSales } from '@/services/sale.service';
import { getExpenses } from '@/services/expense.service';

// import { useRouter } from 'next/navigation'

/**
 * Transactions page
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Transactions(): JSX.Element {

    const [addSaleIsOpen, setAddSaleIsOpen] = useState(false);
    const [addExpenseIsOpen, setAddExpenseIsOpen] = useState(false);

    const [sales, setSales] = useState([]);
    const [expenses, setExpenses] = useState([]);

    const [totalSales, setTotalSales] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);

    const newSalesList: any = [];
    const newExpensesList: any = [];

    const handleAddExpense = (): void => {
        setAddExpenseIsOpen(true);
    }

    const handleAddSale = (): void => {
        setAddSaleIsOpen(true);
    }

    const fetchSalesData = async () => {
        try {
            const response = await getSales();
            const resultStr = JSON.stringify(response);
            const resultObj = JSON.parse(resultStr);
            let newSales = 0;
            for (let i = 0; i < resultObj.length; i++) {
                newSalesList.push({
                    id: resultObj[i]._id,
                    name: resultObj[i].name,
                    description: resultObj[i].description,
                    paymentMethod: resultObj[i].paymentMethod,
                    date: resultObj[i].date,
                    saleAmount: resultObj[i].saleAmount,
                })
                newSales += (parseInt(resultObj[i].saleAmount));
            }
            setTotalSales(newSales);
            setSales(newSalesList);
        } catch (error) {
            console.error('Error fetching sales data:', error);
        }
    }

    useEffect(() => {
        void fetchSalesData();
        void fetchExpensesData();
    }, [addSaleIsOpen, addExpenseIsOpen]);

    const fetchExpensesData = async () => {
        try {
            const response = await getExpenses();
            const resultStr = JSON.stringify(response);
            const resultObj = JSON.parse(resultStr);
            let newExpenses = 0;
            for (let i = 0; i < resultObj.length; i++) {
                newExpensesList.push({
                    id: resultObj[i]._id,
                    name: resultObj[i].name,
                    description: resultObj[i].description,
                    paymentMethod: resultObj[i].paymentMethod,
                    date: resultObj[i].date,
                    expenseAmount: resultObj[i].expenseAmount,
                    supplier: resultObj[i].supplier,
                })
                newExpenses += (parseInt(resultObj[i].expenseAmount));
            }
            setTotalExpenses(newExpenses);
            setExpenses(newExpensesList);
        } catch (error) {
            console.error('Error fetching producst data:', error);
        }
    }

    return (
        <>
            <TransactionsHeader _handleAddSale={handleAddSale} _handleAddExpense={handleAddExpense} />
            <TransactionsSummary balance={totalSales - totalExpenses} totalSales={totalSales} totalExpenses={totalExpenses} />
            <FiltersBar />
            <TabsList sales={sales} expenses={expenses} />
            <RightBar isOpen={addSaleIsOpen} setIsOpen={setAddSaleIsOpen} title='Add Sale'>
                <AddSaleForm setAddSaleIsOpen={setAddSaleIsOpen} />
            </RightBar>
            <RightBar isOpen={addExpenseIsOpen} setIsOpen={setAddExpenseIsOpen} title='Add Expense'>
                <AddExpenseForm setAddExpenseIsOpen={setAddExpenseIsOpen} />
            </RightBar>
        </>
    )
}
