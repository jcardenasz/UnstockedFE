import React from 'react';
import Image from 'next/image';
import styles from './productCard.module.css';

interface ProductCardProps {
    product: any,
    productId: string,
    setProductSummaryIsOpen: (val: boolean) => void,
    setIdProductSelected: (val: any) => void,
}

function ProductCard({ product, productId, setProductSummaryIsOpen, setIdProductSelected }: ProductCardProps): JSX.Element {

    const clickHandler = (): void => {
        setProductSummaryIsOpen(true);
        setIdProductSelected(productId);
    }

    return (
        <div onClick={clickHandler} className={styles.productCard}>
            <div>
                <Image className={styles.img} width={80} height={80} src={product?.picture} alt={''} />
            </div>
            <div>
                <p className={styles.price}>${product?.price?.toLocaleString('de-DE')}</p>
                <h3 className={styles.productName}>{product?.name}</h3>
                <p className={styles.stock}>{product?.stock?.toLocaleString('de-DE')} Available</p>
            </div>
        </div>
    )
}

export default ProductCard