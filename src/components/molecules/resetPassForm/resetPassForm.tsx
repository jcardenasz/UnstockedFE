'use client'

import React from 'react'
// import UnStockedLogo from '@/app/components/atoms/unstockedLogo/UnStockedLogo'

export default function ResetUserPassword(): JSX.Element {
    return (
    <div className="mainDiv">
        <div className="cardStyle">
            <form action="" method="post" name="signupForm" id="signupForm">
                <img src="" id="signupLogo"/>
        
                <h2 className="formTitle">
                    Reset your password
                </h2>
        
                <div className="inputDiv">
                    <label className="inputLabel">New Password</label>
                    <input type="password" id="password" name="password" required /> 
        
                </div>
        
                <div className="inputDiv">
                    <label className="inputLabel">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" />
                </div>
        
                <div className="buttonWrapper">
                    <button type="submit" id="submitButton" className="submitButton pure-button pure-button-primary">
                        <span>Continue</span>
                    </button>
                </div>
      
            </form>
        </div>
    </div>
    )
}