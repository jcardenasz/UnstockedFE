/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import styles from '@/components/atoms/incomesTab/incomesTab.module.css';
import { getSales } from '@/services/sale.service';

interface IncomesTabProps {
    sales: any
}

function IncomesTab({ sales }: IncomesTabProps): JSX.Element {

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.header}>Concept</th>
                        <th className={styles.header}>Value</th>
                        <th className={styles.header}>Payment Method</th>
                        <th className={styles.header}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sales?.map((sales: { id: string, name: string, saleAmount: number, paymentMethod: string, date: string }) => (
                        <tr className={styles.tableRow} key={sales.id}>
                            <td>{sales.name}</td> {/* Concept */}
                            <td>{sales.saleAmount.toLocaleString('de-DE')}</td> {/* Value */}
                            <td>{sales.paymentMethod}</td> {/* Payment Method */}
                            <td>{sales.date}</td> {/* Date */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default IncomesTab;