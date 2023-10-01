import React from 'react'
import Navbar from './components/molecules/navbar/Navbar'
import Footer from './components/molecules/footer/Footer'
/**
 * Esta es la pantalla de inicio
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Home(): JSX.Element {
    return (
        <>
            <Navbar />
            <header>
                <h1 className="title">Inicio/root</h1>
            </header>
            <Footer />
        </>
    )
}
