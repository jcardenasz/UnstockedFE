/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import React , {useState, useEffect} from 'react'
import SocialIcons from '@/components/atoms/socialIcons/SocialIcons'
import UnStockedLogo from '@/components/atoms/unstockedLogo/UnStockedLogo'
import styles from './logInForm.module.css'
import { loginUser } from '@/Services/login.service'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

export default function LogInForm(): JSX.Element{
    const router = useRouter();
    const [loginInfo, setLoginInfo] = useState<{ status: number; data: any; } | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        
        event.preventDefault();
        const res = await loginUser(email , password);
        setLoginInfo(res);
        // no estaba funcionando el if, tuve que cambiar la funcion login para devolver el status
        if (res.status === 200){
            console.log("successful");
            void Toast.fire({
                icon:'success',
                title: 'Signed in successfully'
            })
        }else console.log("error, not successful");
    }
    useEffect(() => {
        if (loginInfo != null && loginInfo.status === 200) {
            console.log("redirecting...");
            router.push('/dashboard');
        }
    }, [loginInfo]);
    return(
        <div className="form-container sign-in-container">
            <form className={styles.logInForm} action="#" onSubmit={handleSubmit}>
                <UnStockedLogo />
                <h1 className={styles.logInFormTitle}>Sign in</h1>
                <input 
                    id="emailInputSignInForm" 
                    className={styles.logInFormInput} 
                    type="email" placeholder="Email" 
                    value={email} 
                    onChange={(e) => {setEmail(e.target.value)}} 
                />
                <input 
                    id="passwordInputSignInForm" 
                    className={styles.logInFormInput} 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => { setPassword(e.target.value); }} 
                />
                <button type='submit' className={styles.logInFormButton}>Sign In</button>
                <span className={styles.logInFormSpan}><a style={{fontSize:'12px', color: '#00a4fc'}} href="#">Forgot your password?</a></span>
                <span className={styles.logInFormSpan} style={{marginTop:'20px'}}>or use your account</span>
                <SocialIcons/>
            </form>
        </div>
    )
}