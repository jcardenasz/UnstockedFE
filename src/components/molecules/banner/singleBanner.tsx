import React from 'react'
import './singleBanner.css'

const SingleBanner = ({ heading }:{heading:any}):JSX.Element => {
    return (
        <div className="singleBanner">
            <div className="bannerheading">
                <h1>{heading}</h1>
            </div>
        </div>
    )
}

export default SingleBanner
