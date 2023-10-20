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
                <div className="mr-6 mt-10">
                    <UnStockedLogo />
                </div>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">UNstocked</h3>
                    <Link href="#">Inicio</Link>
                    <Link href="#">Servicios</Link>
                    <Link href="#">Productos</Link>
                    <Link href="#">Perfil</Link>
                    <Link href="#">Contactenos</Link>
                    <Link href="#">Politica de ###</Link>
                    <Link href="#">FAQ</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6">
                    <h3 className="text-base font-bold mb-2">
                        Acerca de nosotros:
                    </h3>
                    <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque mattis egestas nibh, vitae pretium metus ornare
                        vitae. Integer est urna, feugiat nec varius a, aliquet a
                        velit. Maecenas nec enim facilisis, scelerisque nisl ut,
                        semper nulla. Donec vel mollis metus.
                    </p>
                    <p>
                        &copy; {new Date().getFullYear()} Derechos reservados
                        jasjas
                    </p>
                </div>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Redes:</h3>
                    <SocialIcons />
                </FooterList>
            </div>
        </footer>
    )
}

export default Footer
