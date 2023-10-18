import React from 'react'
import Navbar from '../components/molecules/navbar/Navbar'
import Footer from '../components/molecules/footer/Footer'
import SingleBanner from '../components/molecules/banner/singleBanner'
import ProductSidebar from '../components/molecules/productView/ProductSideBar'

export default function Products(): React.JSX.Element {
    return (
        <div>
            <Navbar />
            <SingleBanner heading="Productos" />
            <ProductSidebar />
            <Footer />
        </div>
    )
}
