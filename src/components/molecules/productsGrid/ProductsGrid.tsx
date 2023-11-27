import ProductCard from '@/components/atoms/productCard/ProductCard';
import React from 'react';
import styles from './productsGrid.module.css';

interface ProducstGridProps {
    productsList: any
}

function ProductsGrid({ productsList }: ProducstGridProps): JSX.Element {
    return (
        <div className={styles.productsGridContainer}>
            {productsList?.map((product: { id: string, picture: string, price: number, name: string, stock: number }) => (
                <ProductCard key={product.id} imageLink={product.picture} price={product.price} productName={product.name} stock={product.stock} />
            ))}
        </div>
    )
}

export default ProductsGrid;