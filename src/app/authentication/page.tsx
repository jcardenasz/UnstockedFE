import React from 'react'
import LogInForm from '@/app/components/molecules/logInForm/LogInForm'
import SignUpForm from '@/app/components/molecules/signUpForm/SignUpForm'
import Overlay from '@/app/components/molecules/overlay/Overlay'
import './authentication.css'

export default function Authentication(): JSX.Element{
    return (
        <div className="container" id="container">
            <SignUpForm/>
            <LogInForm/>
            <Overlay/>
        </div>
    )
}