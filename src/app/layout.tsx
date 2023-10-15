import './globals.css'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'UNStocked',
    description:
        'Inventory management project for ingesoftII, Universidad Nacional de Colombia.',
    viewport:'width=device-width',
    robots:'index, follow',
    themeColor:'#09f',
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
                <meta charSet="utf-8" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}
