'use client'
import React from 'react'
import ResetPasswordForm from '../components/molecules/resetPassForm/resetPassForm'
// import Link from "next/link"
import './resetPassword.css'
import SingleBanner from '../components/molecules/banner/singleBanner'
import Footer from '../components/molecules/footer/Footer'
import Navbar from '../components/molecules/navbar/Navbar'

export default function ResetUserPassword(): JSX.Element {
    return (
        <div>
            <Navbar />
            <SingleBanner heading="reset your Password" />
            <div className="container">
                <ResetPasswordForm />
            </div>
            <Footer />
        </div>
    )
}