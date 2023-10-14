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
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <h1 className={styles.title}>
                        Inventory
                    </h1>
                    <h1 className={styles.title}>
                        Management
                    </h1>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque mattis egestas nibh, vitae pretium metus ornare
                        vitae. Integer est urna, feugiat nec varius a, aliquet a
                        velit. Maecenas nec enim facilisis, scelerisque nisl ut,
                        semper nulla. Donec vel mollis metus.
                    </p>
                    <Link className={styles.button} href="/authentication">Get Started</Link>
                </div>
                <div className={styles.rightSection}>
                    <Image src={image}  alt="ManagementImage" width={500} height={500}/>
                </div>
            </div>
        </>
    )
}
