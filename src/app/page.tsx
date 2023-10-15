import React from 'react'
import LandingNavbar from './components/molecules/landingNavbar/LandingNavbar'
import Image from 'next/image'
import image from '../assets/landingPage.jpg'
import styles from './home.module.css'
import Link from 'next/link'

/**
 * Esta es la pantalla de inicio
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Home(): JSX.Element {
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
                    <Link className={styles.button} href="/authentication">Start Now!</Link>
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
        </>
    )
}
