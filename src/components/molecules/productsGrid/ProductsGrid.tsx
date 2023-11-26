import ProductCard from '@/components/atoms/productCard/ProductCard';
import React from 'react';
import styles from './productsGrid.module.css';

interface ProducstGridProps {
    productsList: any
}

function ProductsGrid({ productsList }: ProducstGridProps): JSX.Element {
    return (
        <div className={styles.productsGridContainer}>
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />
            <ProductCard imageLink={''} price={20000} productName={'Test1'} stock={5} />

            {/* productsList?.map((product: { id: string, name: string }) => { return product }) */}
            {/* <option key={category.id}>{category.name}</option> */}
        </div>
    )
}

export default ProductsGrid;