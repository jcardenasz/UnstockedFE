import React from 'react'
import Link from 'next/link'

export default function UnStockedLogo(props: { textColor?: string }): JSX.Element {
    return (
        <Link href="/">
            <div style={{ fontSize: '30px', color: props.textColor}} className="font-bold">
                <span
                    style={{ fontSize: '35px' }}
                    className="text-pink-600 font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                >
                    UN
                </span>
                Stocked
            </div>
        </Link>
    )
}