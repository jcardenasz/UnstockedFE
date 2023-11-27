import PaymentMethodCard from '@/components/atoms/paymentMethodCard/paymentMethodCard';
import React from 'react';
import styles from './paymentMethodGrid.module.css';

function paymentMethodGrid(): JSX.Element {
    return (
        <div className={styles.paymentMethodGridContainer}>
            <PaymentMethodCard 
            imageLink={'https://img.freepik.com/vector-premium/mano-que-sostiene-icono-linea-moneda-dolar-negro-bancario-concepto-economia-vector-sobre-fondo-blanco-aislado-eps-10_399089-2816.jpg'}
            paymentMethodName={'Tarjeta'}
            />
            <PaymentMethodCard
            imageLink={'https://static.vecteezy.com/system/resources/previews/000/512/872/non_2x/vector-credit-card-glyph-black-icon.jpg'} 
            paymentMethodName={'Efectivo'}
            />
            <PaymentMethodCard 
            imageLink={'https://www.shutterstock.com/image-vector/bank-transfer-icon-isolated-light-260nw-2369859429.jpg'} 
            paymentMethodName={'Transacción'}
            />
        </div>
    )
}

export default paymentMethodGrid;