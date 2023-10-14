import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import styles from './socialIcons.module.css'

export default function SocialIcons(): JSX.Element{
    return(
        <div>
            <a href="#" className={styles.social}><FontAwesomeIcon icon={faFacebook} className="fab fa-facebook-f"/></a>
            <a href="#" className={styles.social}><FontAwesomeIcon icon={faGoogle} className="fab fa-google-plus-g"/></a>
            <a href="#" className={styles.social}><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-in"/></a>
        </div>
    )
}