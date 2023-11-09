'use client'

import Link from "next/link";
import React, { useState } from "react";
import styles from './dashboardNavigation.module.css';
import { signOut } from "next-auth/react";
import { BiReceipt } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai"
import { RiTeamLine } from "react-icons/ri";
import { CiBoxes } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSignOutAlt } from "react-icons/fa";
import BusinessCard from "@/components/atoms/businessCard/BusinessCard";

function DashboardNavigation(): JSX.Element {

    const [itemActive, setItemActive] = useState('');


    return (
        <nav className={styles.dashboardNavigation}>
            <BusinessCard />
            <p className={styles.title}>Keep track of your business</p>
            <ul>
                <li className={`${styles.item} ${itemActive === 'transactions' ? styles.active : ''}`}>
                    <Link href="/dashboard/transactions" onClick={() => { setItemActive('transactions') }}>
                        <span className={styles.span}>
                            <BiReceipt />
                            <p style={{ marginLeft: '8px' }}>Transactions</p>
                        </span>
                    </Link>
                </li>
                <li className={`${styles.item} ${itemActive === 'products' ? styles.active : ''}`}>
                    <Link href="/dashboard/products" onClick={() => { setItemActive('products') }}>
                        <span className={styles.span}>
                            <BsBoxSeam />
                            <p style={{ marginLeft: '8px' }}>Products</p>
                        </span>
                    </Link>
                </li>
                <li className={`${styles.item} ${itemActive === 'employees' ? styles.active : ''}`}>
                    <Link href="/dashboard/employees" onClick={() => { setItemActive('employees') }}>
                        <span className={styles.span}>
                            <RiTeamLine />
                            <p style={{ marginLeft: '8px' }}>Employees</p>
                        </span>
                    </Link>
                </li>
            </ul>
            <p className={styles.title}>Contacts</p>
            <ul>
                <li className={`${styles.item} ${itemActive === 'clients' ? styles.active : ''}`}>
                    <Link href="/dashboard/clients" onClick={() => { setItemActive('clients') }}>
                        <span className={styles.span}>
                            <AiOutlineTeam />
                            <p style={{ marginLeft: '8px' }}>Clients</p>
                        </span>
                    </Link>
                </li>
                <li className={`${styles.item} ${itemActive === 'providers' ? styles.active : ''}`}>
                    <Link href="/dashboard/providers" onClick={() => { setItemActive('providers') }}>
                        <span className={styles.span}>
                            <CiBoxes />
                            <p style={{ marginLeft: '8px' }}>Providers</p>
                        </span>
                    </Link>
                </li>
            </ul>
            <p className={styles.title}>Settings</p>
            <ul>
                <li className={styles.item}>
                    <Link href="/assets/sample-terms-conditions-agreement.pdf" target="_blank">
                        <span className={styles.span}>
                            <RxHamburgerMenu />
                            <p style={{ marginLeft: '8px' }}>Terms & Conditions</p>
                        </span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/assets/sample-privacy-policy-template.pdf" target="_blank">
                        <span className={styles.span}>
                            <RxHamburgerMenu />
                            <p style={{ marginLeft: '8px' }}>Privacy Policy</p>
                        </span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <span className={styles.redspan}>
                        <FaSignOutAlt />
                        <button style={{ marginLeft: '8px' }} onClick={() => { void signOut() }}>Sign out</button>
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default DashboardNavigation;