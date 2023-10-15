'use client'
import React, { useState } from 'react'
import styles from './landingNavbar.module.css'
import './landingNavbar.css'
import UnStockedLogo from '../../atoms/unstockedLogo/UnStockedLogo'
import Link from 'next/link'

function LandingNavbar(): React.JSX.Element {
    
    const [showDropdown, setShowDropDown] = useState(false);

    return (
        <header className={styles.container}>
            <UnStockedLogo textColor={'black'}/>
            <nav className={`${styles.nav} ${showDropdown? styles.active : ''}`}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/authentication">Get Started</Link></li>
                </ul>
            </nav>
            <button id="menuIcon" onClick={()  => { setShowDropDown(!showDropdown); }}>
                <i className='bx bx-menu'></i>
            </button>
        </header>
    )
}

export default LandingNavbar
