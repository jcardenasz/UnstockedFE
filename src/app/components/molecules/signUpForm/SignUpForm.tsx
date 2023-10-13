import React from 'react'
import SocialIcons from '@/app/components/atoms/socialIcons/SocialIcons'
import UnStockedLogo from '@/app/components/atoms/unstockedLogo/UnStockedLogo'

export default function SignUpForm(): JSX.Element{
    return(
        <div className="form-container sign-up-container">
            <form action="#">
                <UnStockedLogo />
                <h1>Create Account</h1>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
                <span>or use your social media for registration</span>
                <SocialIcons/>
            </form>
        </div>
    )
}