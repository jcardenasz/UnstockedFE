'use client'
import React from 'react'
import styles from './overlay.module.css'

export default function OverlayRight(): JSX.Element{
    function handleClick(): void{
        const container = document.getElementById('container');
        container?.classList.add("right-panel-active");
    }
    return(
        <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p className={styles.overlayP}>Enter your personal details and start your journey with us</p>
            <button onClick={handleClick} className={styles.buttonOverlay} id="signUp">Sign Up</button>
        </div>
    )
}