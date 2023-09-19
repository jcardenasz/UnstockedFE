import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import './socialIcons.css'

export default function SocialIcons(): JSX.Element{
    return(
        <div className="social-container">
            <a href="#" className="social"><FontAwesomeIcon icon={faFacebook} className="fab fa-facebook-f"/></a>
            <a href="#" className="social"><FontAwesomeIcon icon={faGoogle} className="fab fa-google-plus-g"/></a>
            <a href="#" className="social"><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-in"/></a>
        </div>
    )
}