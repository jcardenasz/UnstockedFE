import React, { useState } from 'react'
import SocialIcons from '@/app/components/atoms/socialIcons/SocialIcons'
import UnStockedLogo from '@/app/components/atoms/unstockedLogo/UnStockedLogo'
import axios from 'axios'

export default function SignUpForm(): JSX.Element {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e: any): Promise<void> {
        e.preventDefault()

        try {
            await axios.post('http://localhost:', {
                email,
                password,
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="form-container sign-up-container">
            <form action="#">
                <UnStockedLogo />
                <h1>Create Account</h1>
                <input type="text" placeholder="Username" />
                <input
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    placeholder="Password"
                />
                <button onClick={submit}>Sign Up</button>
                <span>or use your social media for registration</span>
                <SocialIcons />
            </form>
        </div>
    )
}
