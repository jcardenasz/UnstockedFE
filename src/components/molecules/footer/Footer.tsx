import React from 'react'
import './footer.css'
import FooterList from './FooterList'
import Link from 'next/link'
import UnStockedLogo from '../../atoms/unstockedLogo/UnStockedLogo'
import SocialIcons from '../../atoms/socialIcons/SocialIcons'

function Footer(): React.JSX.Element {
    return (
        <footer className="footer">
            <div className="items">
                <div className="mr-6">
                    <UnStockedLogo />
                </div>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">UNstocked</h3>
                    <Link href="#">Home</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">FAQ</Link>
                </FooterList>
                <div className="w-full md:w-1/3">
                    <h3 className="text-base font-bold mb-2">
                        About us:
                    </h3>
                    <p className="mb-2">
                        We are a group of students of National University of Colombia
                        that are trying to provide a service for keeping a good management
                        of any kind of inventories.
                    </p>
                    <p>
                        &copy; {new Date().getFullYear()} UNStocked | All rights Reserved
                    </p>
                </div>
                <div className='socialMedia'>
                    <h3 className="text-base font-bold mb-2">Redes:</h3>
                    <SocialIcons />
                </div>
            </div>
        </footer>
    )
}

export default Footer
