/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import React, {useState} from 'react'
import SocialIcons from '@/app/components/atoms/socialIcons/SocialIcons'
import UnStockedLogo from '@/app/components/atoms/unstockedLogo/UnStockedLogo'
import { fetchUser } from '@/services/login.service'
import styles from './signUpForm.module.css'

export default function SignUpForm(): JSX.Element{
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    return(
        <div className="form-container sign-up-container">
            <form className={styles.signUpForm} action="#" onSubmit={async () =>await fetchUser({
                username,
                email,
                password
                },
                'register'
            )}>
                <UnStockedLogo />
                <h1 className={styles.signUpFormTitle}>Create Account</h1>
                <input id="usernameInputSignUpForm" className={styles.signUpFormInput} type="text" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value); }}/>
                <input id="emailInputSignUpForm" className={styles.signUpFormInput} type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                <input id="passwordInputSignUpForm" className={styles.signUpFormInput} type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }}/>
                <button className={styles.signUpFormButton}>Sign Up</button>
                <span className={styles.signUpFormSpan}>or use your social media for registration</span>
                <SocialIcons/>
            </form>
        </div>
    )
}