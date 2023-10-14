'use client'
import React from 'react'
import styles from './overlay.module.css'

export default function OverlayLeft(): JSX.Element{
    function handleClick(): void{
        const container = document.getElementById('container');
        container?.classList.remove("right-panel-active");
    }

    return(
        <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p className={styles.overlayP}>To keep connected with us please login with your personal info</p>
            <button onClick={handleClick} className={styles.buttonOverlay} id="signIn">Sign In</button>
        </div>
    )
}