'use client'
import React, { useEffect } from 'react'
import LogInForm from '@/components/molecules/logInForm/LogInForm'
import SignUpForm from '@/components/molecules/signUpForm/SignUpForm'
import Overlay from '@/components/molecules/overlay/Overlay'
import {useSession} from "next-auth/react"
import './authentication.css'
import { useRouter } from 'next/navigation'

export default function Authentication(): JSX.Element{

    const {data: session, status} = useSession();
    const router = useRouter();

    console.log({session, status});
    useEffect(() => {
        if(status === 'authenticated'){
            router.push("/")
        }
    }, [status, router]);

    return (
        <div className="falseBody">
            <div className="container" id="container">
                <SignUpForm/>
                <LogInForm/>
                <Overlay/>
            </div>
        </div>
    )
}