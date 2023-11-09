import React from 'react';
import Navbar from '@/components/molecules/navbar/Navbar';
import DashboardNavigation from '@/components/molecules/dashboardNavigation/DashboardNavigation';
import Footer from '@/components/molecules/footer/Footer';
import styles from '@/app/dashboard/dashboard.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <>
            <Navbar />
            <DashboardNavigation />
            <div className={styles.informationContainer}>
                {children}
            </div>
            <Footer />
        </>
    )
}
