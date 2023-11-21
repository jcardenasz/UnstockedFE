import ProductsHeader from '@/components/atoms/productsHeader/ProductsHeader';
import ProductsSummary from '@/components/molecules/productsSummary/ProductsSummary';
import React from 'react';

// import { useRouter } from 'next/navigation'

/**
 * Esta es la pantalla de inicio
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Products(): JSX.Element {

    return (
        <>
            <ProductsHeader />
            <ProductsSummary />
            {/* Products grid */}
        </>
    )
}
