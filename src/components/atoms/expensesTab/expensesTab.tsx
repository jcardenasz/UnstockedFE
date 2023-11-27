/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import styles from '@/components/atoms/incomesTab/incomesTab.module.css';
import {getExpenses} from '@/services/expense.service';

function ExpensesTab(): JSX.Element {
    
    const newExpensesList: any = [];

    const [data, setExpenses] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState(0);


    const fetchExpensesData = async () => {
        try {
            const response = await getExpenses();
            console.log('Response: ', response);
            const resultStr = JSON.stringify(response);
            const resultObj = JSON.parse(resultStr);
            let newExpenses = 0;
            console.log('Expenses: ', resultObj);
            for (let i = 0; i < resultObj.length; i++) {
                newExpensesList.push({
                    id: resultObj[i]._id,
                    name: resultObj[i].name,
                    description: resultObj[i].description,
                    PaymentMethod: resultObj[i].PaymentMethod,
                    date: resultObj[i].date,
                    expenseAmount: resultObj[i].saleAmount,
                    suplier: resultObj[i].suplier,
                })
                newExpenses += (parseInt(resultObj[i].saleAmount));
            }
            setTotalExpenses(newExpenses);
            setExpenses(newExpensesList);
        } catch (error) {
            console.error('Error fetching producst data:', error);
        }
    }

    useEffect(() => {
        void fetchExpensesData();
        setExpenses(newExpensesList);
    }, []);

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
                    {data?.map((data: { id: string, name: string, expenseAmount: number, paymentMethod:string, date: string, supplier:string }) => (
                        <tr className={styles.tableRow} key={data.id}>
                            <td>{data.name}</td> {/* Concept */}
                            <td>{data.expenseAmount}</td> {/* Value */}
                            <td>{data.paymentMethod}</td> {/* Payment Method */}
                            <td>{data.date}</td> {/* Date */}
                            <td>{data.supplier}</td> {/* Supplier */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ExpensesTab;