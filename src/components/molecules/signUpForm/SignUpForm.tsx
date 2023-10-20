/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import React, {useState} from 'react'
import { signIn } from "next-auth/react";
import SocialIcons from '@/components/atoms/socialIcons/SocialIcons'
import UnStockedLogo from '@/components/atoms/unstockedLogo/UnStockedLogo'
import styles from './signUpForm.module.css'
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'



export default function SignUpForm(): JSX.Element{

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`,{
            method: "POST",
            headers: {
                'Cache-Control':'max-age=120',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        }
        );

        const responseAPI = await res.json();

        if (!res.ok) {
            void Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong'
            })
            return;
        }

        const responseNextAuth = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if ((responseNextAuth?.error) != null) {
            void Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong'
            })
            return;
        }
        void Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            text: 'User created successfully'
        })
        router.push("/");
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