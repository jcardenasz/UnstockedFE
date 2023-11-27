/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import styles from '@/components/atoms/incomesTab/incomesTab.module.css';
import {getSales} from '@/services/sale.service';

function IncomesTab(): JSX.Element {
    
    const newSalesList: any = [];

    const [data, setData] = useState([]);

    const fetchSalesData = async () => {
        try {
            const response = await getSales();
            console.log('Response: ', response);
            const resultStr = JSON.stringify(response);
            const resultObj = JSON.parse(resultStr);
            let newSales = 0;
            let newCosts = 0;
            let balance = 0;
            console.log('Sales: ', resultObj);
            for (let i = 0; i < resultObj.length; i++) {
                newSalesList.push({
                    id: resultObj[i]._id,
                    name: resultObj[i].name,
                    description: resultObj[i].description,
                    date: resultObj[i].stock,
                    saleAmount: resultObj[i].picture,
                })
                newCosts += (parseInt(resultObj[i].price) * parseInt(resultObj[i].stock));
                balance += parseInt(resultObj[i].stock);
            }
            setTotalProducts(newStock);
            setTotalCost(newCost);
            setProductsList(newProductsList);
        } catch (error) {
            console.error('Error fetching producst data:', error);
        }
    }

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
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.saleAmount}</td>
                            <td>{item.paymentMethod}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default IncomesTab;