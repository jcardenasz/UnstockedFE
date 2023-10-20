import React from 'react'
import './CategorySidebar.css'

function CategorySidebar(): React.JSX.Element {
    const data = [
        {
            id: 1,
            categoryname: 'Categoria 1',
        },
        {
            id: 2,
            categoryname: 'Categoria 2',
        },
        {
            id: 3,
            categoryname: 'Categoria 3',
        },
        {
            id: 4,
            categoryname: 'Categoria 4',
        },
    ]

    return (
        <div className="categorysidebar">
            {data.map((item) => {
                return (
                    <div className="category" key={item.id}>
                        <h3>{item.categoryname}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default CategorySidebar
