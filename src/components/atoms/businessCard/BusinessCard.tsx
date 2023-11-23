import React from "react";
import styles from "./businessCard.module.css";
import { BiSolidBusiness } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

function BusinessCard(): JSX.Element {
    return (
        <div className={styles.container}>
            <span className={styles.businessCard}>
                <span className={styles.businessLogo}>
                    <BiSolidBusiness size={25} />
                </span>
                <div className={styles.textContainer}>
                    <h3 className={styles.businessName}>Business Name</h3>
                    <h5 className={styles.userTitle}>Owner</h5>
                </div>
            </span>
            <div className={styles.divider} />
            <div className={styles.settingsContainer}>
                <a href="/dashboard" style={{ marginBottom: '5px' }} className={styles.settingsButton}>
                    <IoSettingsSharp />
                    <p className={styles.settingsText}>Settings</p>
                </a>
            </div>
        </div>
    )
}

export default BusinessCard;