import React from 'react';
import styles from './paymentMethodCard.module.css';

interface PaymentMethodProps {
    imageLink: string,
    paymentMethodName: string,
}

function PaymentMethod({ imageLink, paymentMethodName}: PaymentMethodProps): JSX.Element {
    return (
        <div className={styles.PaymentMethod}>
            <div>
                <img className={styles.img} src={imageLink} alt={''}/>
            </div>
            <div>
                <h3 className={styles.paymentMethodName}>{paymentMethodName}</h3>
            </div>
        </div>
    )
}

export default PaymentMethod