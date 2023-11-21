import React from 'react';
import styles from './settingsHeader.module.css';

function SettingsHeader(): JSX.Element {
    return (
        <header className={styles.settingsHeader}>
            <h1 className={styles.title}>Dashboard</h1>
        </header>
    )
}

export default SettingsHeader;