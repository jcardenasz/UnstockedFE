import React from 'react'
import './footer.css'

interface FooterListProps {
    children: React.ReactNode
}

const FooterList: React.FC<FooterListProps> = ({ children }) => {
    return <div className="footerList">{children}</div>
}

export default FooterList
