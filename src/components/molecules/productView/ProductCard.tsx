import React from 'react'
import './ProductCard.css'

function ProductCard({ data }): React.JSX.Element {
    return (
        <div className="product">
            <div className="s0">
                <h2>{data.names}</h2>
            </div>
            <div className="s1">
                <img src={data.picture} alt={'no image'} />
            </div>
            <div className="s2">
                <h3>Stock: {data.stock}</h3>
            </div>
            <div className="s3">
                <p>{data.description}</p>
            </div>
            <div className="button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        </div>
    )
}

export default ProductCard
