import DashboardNavigation from '@/components/molecules/dashboardNavigation/DashboardNavigation'
import Footer from '@/components/molecules/footer/Footer'
import Navbar from '@/components/molecules/navbar/Navbar'
import React from 'react'

// import { useRouter } from 'next/navigation'

/**
 * Esta es la pantalla de inicio
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Dashboard(): JSX.Element {

    return (
        <>
            <Navbar />
            <DashboardNavigation />
            <Footer />
        </>
    )
}
