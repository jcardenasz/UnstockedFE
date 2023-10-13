/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import React , {useState} from 'react'
import SocialIcons from '@/app/components/atoms/socialIcons/SocialIcons'
import UnStockedLogo from '@/app/components/atoms/unstockedLogo/UnStockedLogo'
import { fetchUser } from '@/Services/login.service'

export default function LogInForm(): JSX.Element{
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    return(
        <div className="form-container sign-in-container">
            <form action="#" onSubmit={async () => await fetchUser({
                email,
                password
                },
                'login'
            )}>
                <UnStockedLogo />
                <h1>Sign in</h1>
                <input type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
                <button>Sign In</button>
                <span><a style={{fontSize:'12px'}} href="#">Forgot your password?</a></span>
                <span>or use your account</span>
                <SocialIcons/>
            </form>
        </div>
    )
} // react hook form