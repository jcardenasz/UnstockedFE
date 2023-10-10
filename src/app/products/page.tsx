import React from 'react'
import Navbar from '../components/molecules/navbar/Navbar'
import Footer from '../components/molecules/footer/Footer'
import SingleBanner from '../components/molecules/banner/singleBanner'
/* 
async function getProducts() {
    const res = await.fetch('mongodb+srv://samuel:1234@cluster0.ymfpquo.mongodb.net/test?retryWrites=true&w=majority')
} */

export default function Products() {
    return (
        <div>
            <Navbar />
            <SingleBanner heading="Productos" />
            <h1></h1>
            <Footer />
        </div>
    )
}
