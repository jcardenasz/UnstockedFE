/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import React, {useState} from 'react'
import SocialIcons from '@/app/components/atoms/socialIcons/SocialIcons'
import UnStockedLogo from '@/app/components/atoms/unstockedLogo/UnStockedLogo'
import { fetchUser } from '@/Services/login.service' 

export default function SignUpForm(): JSX.Element{
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    return(
        <div className="form-container sign-up-container">
            <form action="#" onSubmit={async () =>await fetchUser({
                username,
                email,
                password
                },
                'register'
            )}>
                <UnStockedLogo />
                <h1>Create Account</h1>
                <input type="text" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value); }}/>
                <input type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }}/>
                <button>Sign Up</button>
                <span>or use your social media for registration</span>
                <SocialIcons />
            </form>
        </div>
    )
}
