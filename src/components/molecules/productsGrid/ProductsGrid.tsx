/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ProductCard from '@/components/atoms/productCard/ProductCard';
import React, { useEffect, useState } from 'react';
import styles from './productsGrid.module.css';
import RightBar from '@/components/atoms/rightBar/RightBar';
import ProductSummaryRightBar from '../productSummaryRightBar/ProductSummaryRightBar';
import { getProduct, getProducts } from '@/services/product.service';
import DeleteProductPanel from '@/components/atoms/deleteProductPanel/DeleteProductPanel';
import ProductForm from '@/components/molecules/addProductForm/ProductForm';

interface ProducstGridProps {
    addProductIsOpen: boolean,
    categoriesList: any,
    setTotalProducts: (val: number) => void
    setTotalCost: (val: number) => void
}

function ProductsGrid({ setTotalProducts, setTotalCost, addProductIsOpen, categoriesList }: ProducstGridProps): JSX.Element {

    const [productSummaryIsOpen, setProductSummaryIsOpen] = useState(false);
    const [productDeleteIsOpen, setProductDeleteIsOpen] = useState(false);
    const [productEditIsOpen, setProductEditIsOpen] = useState(false);

    const [productsList, setProductsList] = useState([]);
    const [idProductSelected, setIdProductSelected] = useState('');
    const [productSelected, setProductSelected] = useState({
        id: '',
        name: '',
        description: '',
        stock: 0,
        picture: '',
        category: '',
        price: 0,
    });

    const newProductsList: any = [];

    useEffect(() => {
        void fetchProductsData();
        if (productSummaryIsOpen) {
            void fetchProductData(idProductSelected);
        }
    }, [productSummaryIsOpen, productDeleteIsOpen, productEditIsOpen, addProductIsOpen])

    const fetchProductData = async (id: string) => {
        try {
            const response = await getProduct(id);
            const resultStr = JSON.stringify(response);
            const resultObj = JSON.parse(resultStr);
            const newProduct = {
                id: resultObj[0]._id,
                name: resultObj[0].name,
                description: resultObj[0].description,
                stock: resultObj[0].stock,
                picture: resultObj[0].picture,
                category: resultObj[0].category,
                price: resultObj[0].price,
            }
            setProductSelected(newProduct);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }

    const fetchProductsData = async () => {
        try {
            const response = await getProducts();
            const resultStr = JSON.stringify(response);
            const resultObj = JSON.parse(resultStr);
            console.log('Object: ', resultObj);
            let newCost = 0;
            let newStock = 0;
            for (let i = 0; i < resultObj.length; i++) {
                newProductsList.push({
                    id: resultObj[i]._id,
                    name: resultObj[i].name,
                    description: resultObj[i].description,
                    stock: resultObj[i].stock,
                    picture: resultObj[i].picture,
                    price: resultObj[i].price,
                    category: resultObj[i].category,
                })
                newStock += parseInt(resultObj[i].stock);
                newCost += (parseInt(resultObj[i].price) * parseInt(resultObj[i].stock));
            }
            setTotalProducts(newStock);
            setTotalCost(newCost);
            setProductsList(newProductsList);
        } catch (error) {
            console.error('Error fetching products data:', error);
        }
    }

    return (
        <>
            <div className={styles.productsGridContainer}>
                {productsList?.map((product: { id: string, picture: string, price: number, name: string, stock: number }) => (
                    <ProductCard
                        product={product}
                        setIdProductSelected={setIdProductSelected}
                        setProductSummaryIsOpen={setProductSummaryIsOpen}
                        key={product.id}
                        productId={product.id}
                    />
                ))}
            </div>

            <RightBar isOpen={productSummaryIsOpen} title='Product Info' setIsOpen={setProductSummaryIsOpen}>
                <ProductSummaryRightBar
                    product={productSelected}
                    setProductSummaryIsOpen={setProductSummaryIsOpen}
                    setProductDeleteIsOpen={setProductDeleteIsOpen}
                    setProductEditIsOpen={setProductEditIsOpen}
                />
            </RightBar>

            <RightBar isOpen={productDeleteIsOpen} title='Delete Product' setIsOpen={setProductDeleteIsOpen}>
                <DeleteProductPanel productSelected={productSelected} setProductSelected={setProductSelected} setProductSummaryIsOpen={setProductSummaryIsOpen} setProductDeleteIsOpen={setProductDeleteIsOpen} />
            </RightBar>

            <RightBar isOpen={productEditIsOpen} title='Edit Product' setIsOpen={setProductEditIsOpen}>
                <ProductForm isEdit productSelected={productSelected} categoriesList={categoriesList} setProductSummaryIsOpen={setProductSummaryIsOpen} setProductEditIsOpen={setProductEditIsOpen} />
            </RightBar>
        </>
    )
}

export default ProductsGrid;