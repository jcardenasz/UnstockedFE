import React from 'react'
import CategorySidebar from './CategorySidebar'
import './ProductsSidebar.css'
import AllProducts from './AllProducts'

function ProductSidebar(): React.JSX.Element {
    return (
        <div className="products">
            <CategorySidebar />
            <AllProducts />
        </div>
    )
}

export default ProductSidebar
