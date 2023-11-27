import React from 'react';
import styles from './paymentMethodCard.module.css';
import { FaRegCreditCard } from 'react-icons/fa';
import { RiCashLine } from 'react-icons/ri';
import { PiBankBold } from "react-icons/pi";

interface PaymentMethodProps {
    productActive: string
    paymentMethodName: string,
    setProductActive: (val: string) => void,
    setSalePaymentMethod?: (val: string) => void
    setExpensePaymentMethod?: (val: string) => void
}

function PaymentMethod({ productActive, paymentMethodName, setProductActive, setSalePaymentMethod, setExpensePaymentMethod }: PaymentMethodProps): JSX.Element {


    const stylesContainer = productActive === paymentMethodName ? `${styles.paymentMethodContainer} ${styles.active}` : `${styles.paymentMethodContainer}`

    const handleClick = (): void => {
        setProductActive(paymentMethodName);
        if (setSalePaymentMethod !== undefined) {
            setSalePaymentMethod(paymentMethodName);
        }
        if (setExpensePaymentMethod !== undefined) {
            setExpensePaymentMethod(paymentMethodName);
        }
    }

    return (
        <button type='button' onClick={handleClick} className={stylesContainer}>
            <div>
                {paymentMethodName === 'Card' ? <FaRegCreditCard size={30} /> : null}
                {paymentMethodName === 'Cash' ? <RiCashLine size={30} /> : null}
                {paymentMethodName === 'Transfer' ? <PiBankBold size={30} /> : null}
            </div>
            <h3 className={styles.paymentMethodName}>{paymentMethodName}</h3>
        </button>
    )
}

export default PaymentMethod