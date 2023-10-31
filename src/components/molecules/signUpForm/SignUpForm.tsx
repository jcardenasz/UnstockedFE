/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import React, {useState} from 'react'

import SocialIcons from '@/components/atoms/socialIcons/SocialIcons'
import UnStockedLogo from '@/components/atoms/unstockedLogo/UnStockedLogo'
import styles from './signUpForm.module.css'
import {registerUser} from '@/services/register.service'
import Swal from 'sweetalert2'



export default function SignUpForm(): JSX.Element{

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const res = await registerUser(username , email, password);
        
        if ((res).ok){
            void Toast.fire({
                icon:'success',
                title: 'User created successfully'
            })
        }
    };

    return(
        <div className="form-container sign-up-container">
            <form className={styles.signUpForm} action="#" onSubmit={handleSubmit}>
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