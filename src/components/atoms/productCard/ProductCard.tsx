import React from 'react';
import Image from 'next/image';
import styles from './productCard.module.css';

interface ProductCardProps {
    imageLink: string,
    price: number,
    productName: string,
    stock: number,
}

function ProductCard({ imageLink, price, productName, stock }: ProductCardProps): JSX.Element {
    return (
        <div className={styles.productCard}>
            <div>
                <Image className={styles.img} width={80} height={80} src={imageLink} alt={''} />
            </div>
            <div>
                <p className={styles.price}>${price?.toLocaleString('de-De')}</p>
                <h3 className={styles.productName}>{productName}</h3>
                <p className={styles.stock}>{stock} Disponibles</p>
            </div>
        </div>
    )
}

export default ProductCard