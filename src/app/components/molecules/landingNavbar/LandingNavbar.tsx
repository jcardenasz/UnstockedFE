import React from 'react'
import styles from './landingNavbar.module.css'
import UnStockedLogo from '../../atoms/unstockedLogo/UnStockedLogo'
import Link from 'next/link'

function LandingNavbar(): React.JSX.Element {

    return (
        <nav className={styles.nav}>
            <UnStockedLogo textColor={'black'}/>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/authentication">Get Started</Link></li>
            </ul>
        </nav>
    )
}

export default LandingNavbar
