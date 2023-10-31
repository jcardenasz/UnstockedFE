import React from "react";
import styles from "./businessCard.module.css";
import { BiSolidBusiness } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { GrAddCircle } from "react-icons/gr";

function BusinessCard(): JSX.Element {
    return (
        <div className={styles.container}>
            <span className={styles.businessCard}>
                <span className={styles.businessLogo}>
                    <BiSolidBusiness />
                </span>
                <div className={styles.textContainer}>
                    <h3 className={styles.businessName}>Business Name</h3>
                    <h5 className={styles.userTitle}>Owner</h5>
                </div>
            </span>
            <div className={styles.divider} />
            <div className={styles.settingsContainer}>
                <div style={{ marginBottom: '5px' }} className={styles.settingsButton}>
                    <IoSettingsSharp />
                    <p className={styles.settingsText}>Settings</p>
                </div>
                <div className={styles.settingsButton}>
                    <GrAddCircle />
                    <p className={styles.settingsText}>Add business</p>
                </div>
            </div>
        </div>
    )
}

export default BusinessCard;