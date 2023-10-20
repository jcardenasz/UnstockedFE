import React from 'react'
import OverlayLeft from '@/components/molecules/overlay/OverlayLeft'
import OverlayRight from '@/components/molecules/overlay/OverlayRight'

export default function Overlay(): JSX.Element{
    return(
        <div className="overlay-container">
            <div className="overlay">
                <OverlayLeft/>
                <OverlayRight/>
            </div>
        </div>
    )
}