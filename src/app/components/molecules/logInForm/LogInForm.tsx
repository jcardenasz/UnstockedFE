import React from 'react'
import SocialIcons from '@/app/components/atoms/socialIcons/SocialIcons'
import UnStockedLogo from '@/app/components/atoms/unstockedLogo/UnStockedLogo'

export default function LogInForm(): JSX.Element{
    return(
        <div className="form-container sign-in-container">
            <form action="#">
                <UnStockedLogo />
                <h1>Sign in</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
                <span><a href="#">Forgot your password?</a></span>
                <span>or use your account</span>
                <SocialIcons/>
            </form>
        </div>
    )
}