/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import React , {useState} from 'react'
import SocialIcons from '@/app/components/atoms/socialIcons/SocialIcons'
import UnStockedLogo from '@/app/components/atoms/unstockedLogo/UnStockedLogo'
import { fetchUser } from '@/services/login.service'
import styles from './logInForm.module.css'

export default function LogInForm(): JSX.Element{
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    return(
        <div className="form-container sign-in-container">
            <form className={styles.logInForm} action="#" onSubmit={async () => await fetchUser({
                email,
                password
                },
                'login'
            )}>
                <UnStockedLogo />
                <h1 className={styles.logInFormTitle}>Sign in</h1>
                <input id="emailInputSignInForm" className={styles.logInFormInput} type="text" placeholder="Username" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                <input id="passwordInputSignInForm" className={styles.logInFormInput} type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
                <button className={styles.logInFormButton}>Sign In</button>
                <span className={styles.logInFormSpan}><a style={{fontSize:'12px', color: '#00a4fc'}} href="#">Forgot your password?</a></span>
                <span className={styles.logInFormSpan} style={{marginTop:'20px'}}>or use your account</span>
                <SocialIcons/>
            </form>
        </div>
    )
} // react hook form