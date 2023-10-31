'use client'
import React from 'react'
import ResetPasswordForm from '../../components/molecules/resetPassForm/resetPassForm'
import './resetPassword.css'
import Footer from '@/components/molecules/footer/Footer'
import Navbar from '@/components/molecules/navbar/Navbar'

export default function ResetUserPassword(): JSX.Element {
    return (
        <div>
            <Navbar />
            <div className="container">
                <ResetPasswordForm />
            </div>
            <Footer />
        </div>
    )
}