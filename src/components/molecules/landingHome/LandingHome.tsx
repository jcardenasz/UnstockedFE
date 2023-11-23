'use client'
import React from 'react'
import LandingNavbar from '../navbar/Navbar'
import Image from 'next/image'
import image from '../../../../public/assets/landingPage.jpg'
import styles from './landingHome.module.css'
import Link from 'next/link'
import Footer from '../footer/Footer'
import { useSession } from 'next-auth/react'

function LandingHome(): React.JSX.Element {

    const { status } = useSession();
    const buttonText = status === 'authenticated' ? 'Dashboard' : 'Start Now!';
    const buttonHref = status === 'authenticated' ? '/dashboard' : '/authentication';

    return (
        <>
            <LandingNavbar />
            <div className={`${styles.container} md:flex`}>
                <div className={styles.leftSection}>
                    <h1 className={styles.title}>
                        Inventory
                    </h1>
                    <h1 className={styles.title}>
                        Management
                    </h1>
                    <p className={styles.description}>
                        UNStocked is a platform aimed to people who is searching
                        the best tool available for improving their management of
                        any kind of inventories. We provide a set of tools designed
                        to optimize your time so you can focus on important problems
                        while we focus on taking care of your inventory.
                    </p>
                    <Link className={styles.button} href={buttonHref}>{buttonText}</Link>
                </div>
                <div className={`${styles.rightSection}`}>
                    <Image
                        title="Manage your inventory"
                        src={image}
                        alt="Animated image of people managing their inventories"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingHome
