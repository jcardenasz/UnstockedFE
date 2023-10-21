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
                    <Link href="#">Inicio</Link>
                    <Link href="#">Servicios</Link>
                    <Link href="#">Productos</Link>
                    <Link href="#">Perfil</Link>
                    <Link href="#">Contactenos</Link>
                    <Link href="#">Politica de Privacidad</Link>
                    <Link href="#">FAQ</Link>
                </FooterList>
                <div className="w-full md:w-1/3">
                    <h3 className="text-base font-bold mb-2">
                        Acerca de nosotros:
                    </h3>
                    <p className="mb-2">
                        UNStocked is a platform aimed to people who is searching
                        the best tool available for improving their management of
                        any kind of inventories. We provide a set of tools designed
                        to optimize your time so you can focus on important problems
                        while we focus on taking care of your inventory.
                    </p>
                    <p>
                        &copy; {new Date().getFullYear()} Derechos reservados
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
