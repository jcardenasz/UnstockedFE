import React, { useState } from 'react'
import SocialIcons from '@/app/components/atoms/socialIcons/SocialIcons'
import UnStockedLogo from '@/app/components/atoms/unstockedLogo/UnStockedLogo'
import axios from 'axios'

export default function LogInForm(): JSX.Element {
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
        <div className="form-container sign-in-container">
            <form action="#">
                <UnStockedLogo />
                <h1>Sign in</h1>
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
                <button onClick={submit}>Sign In</button>
                <span>
                    <a style={{ fontSize: '12px' }} href="#">
                        Forgot your password?
                    </a>
                </span>
                <span>or use your account</span>
                <SocialIcons />
            </form>
        </div>
    )
}
