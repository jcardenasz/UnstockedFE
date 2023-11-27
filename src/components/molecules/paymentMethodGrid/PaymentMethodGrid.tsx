import PaymentMethodCard from '@/components/atoms/paymentMethodCard/paymentMethodCard';
import React, { useState } from 'react';
import styles from './paymentMethodGrid.module.css';

interface PaymentMethodGridProps {
    setSalePaymentMethod?: (val: string) => void
    setExpensePaymentMethod?: (val: string) => void
}
function PaymentMethodGrid({ setSalePaymentMethod, setExpensePaymentMethod }: PaymentMethodGridProps): JSX.Element {

    const [productActive, setProductActive] = useState('');

    return (
        <div className={styles.paymentMethodGridContainer}>
            <PaymentMethodCard
                productActive={productActive}
                setProductActive={setProductActive}
                setSalePaymentMethod={setSalePaymentMethod}
                setExpensePaymentMethod={setExpensePaymentMethod}
                paymentMethodName={'Card'}
            />
            <PaymentMethodCard
                productActive={productActive}
                setProductActive={setProductActive}
                setSalePaymentMethod={setSalePaymentMethod}
                setExpensePaymentMethod={setExpensePaymentMethod}
                paymentMethodName={'Cash'}
            />
            <PaymentMethodCard
                productActive={productActive}
                setProductActive={setProductActive}
                setSalePaymentMethod={setSalePaymentMethod}
                setExpensePaymentMethod={setExpensePaymentMethod}
                paymentMethodName={'Transfer'}
            />
        </div>
    )
}

export default PaymentMethodGrid;