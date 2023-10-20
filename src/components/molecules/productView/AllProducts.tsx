import React from 'react'
import './AllProducts.css'
import ProductCard from './ProductCard'

function AllProducts(): React.JSX.Element {
    const products = [
        {
            id: 1,
            names: 'producto 1',
            description: 'esta es la descripcion del producto 1',
            stock: 2,
            picture:
                'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/429/131815/fc0078efc5dd4e2b579dd153ea420bc4865818c9cfeab31652d4e20abdd9a3ee__28518.1696834913.png?c=2',
            tags: 'Array',
        },
        {
            id: 2,
            names: 'producto 2',
            description: 'esta es la descripcion del producto 2',
            stock: 4,
            picture:
                'https://static.vecteezy.com/system/resources/previews/013/643/137/original/bread-with-transparent-background-free-png.png',
            tags: 'Array',
        },
        {
            id: 3,
            names: 'producto 3',
            description: 'esta es la descripcion del producto 3',
            stock: 3,
            picture: 'https://pngimg.com/d/toilet_paper_PNG18315.png',
            tags: 'Array',
        },
        {
            id: 4,
            names: 'producto 4',
            description: 'esta es la descripcion del producto 4',
            stock: 1000,
            picture:
                'https://png.pngtree.com/png-clipart/20221008/original/pngtree-set-square-png-image_8666388.png',
            tags: 'Array',
        },
    ]

    return (
        <div className="allproducts">
            <h1>All products</h1>
            <div className="products">
                {products.map((item) => {
                    return <ProductCard data={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default AllProducts
