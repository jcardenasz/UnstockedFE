/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import styles from '@/components/atoms/incomesTab/incomesTab.module.css';
import {getSales} from '@/services/sale.service';

function IncomesTab(): JSX.Element {
    
    const newSalesList: any = [];

    const [data, setSales] = useState([]);
    const [totalSales, setTotalSales] = useState(0);


    const fetchSalesData = async () => {
        try {
            const response = await getSales();
            console.log('Response: ', response);
            const resultStr = JSON.stringify(response);
            const resultObj = JSON.parse(resultStr);
            let newSales = 0;
            console.log('Sales: ', resultObj);
            for (let i = 0; i < resultObj.length; i++) {
                newSalesList.push({
                    id: resultObj[i]._id,
                    name: resultObj[i].name,
                    description: resultObj[i].description,
                    date: resultObj[i].stock,
                    saleAmount: resultObj[i].picture,
                })
                newSales += (parseInt(resultObj[i].saleAmount));
            }
            setTotalSales(newSales);
            setSales(newSalesList);
        } catch (error) {
            console.error('Error fetching producst data:', error);
        }
    }

    void fetchSalesData();
            void setSales(newSalesList);
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
                    </tr>
                </thead>
                <tbody>
                    {data?.map((data: { id: string, name: string, saleAmount: number, paymentMethod:string, date: string }) => (
                        <tr key={''}>
                            <td>{data.name}</td>
                            <td>{data.saleAmount}</td>
                            <td>{data.paymentMethod}</td>
                            <td>{data.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default IncomesTab;