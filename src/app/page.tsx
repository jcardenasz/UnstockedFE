import React from 'react'
import Navbar from './components/molecules/navbar/Navbar'
import Footer from './components/molecules/footer/Footer'
import SingleBanner from './components/molecules/banner/singleBanner'
import Link from 'next/link'
/**
 * Esta es la pantalla de inicio
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Home(): JSX.Element {
    return (
        <>
            <Navbar />
            <SingleBanner heading="Inicio" />
            <h1>Haz click</h1>
            <Link href="/products"> - Productos</Link>
            <Link href="/profile"> - Perfil</Link>
            <Link href="/authentication"> - Sign up</Link>
            <Footer />
        </>
    )
}
