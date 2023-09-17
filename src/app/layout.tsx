import './globals.css'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Unstocked',
    description:
        'Inventory management project for ingesoftII, Universidad Nacional de Colombia.',
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
