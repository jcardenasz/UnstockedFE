import React from 'react'
import ProfileForm from '../components/molecules/profileForm/ProfileForm'
// import Link from "next/link"
import './profile.css'
import SingleBanner from '../components/molecules/banner/singleBanner'
import Footer from '../components/molecules/footer/Footer'
import Navbar from '../components/molecules/navbar/Navbar'

export default function UserProfile(): JSX.Element {
    return (
        <div>
            <Navbar />
            <SingleBanner heading="Perfil Empresa" />
            <div className="container">
                <ProfileForm />
            </div>
            <Footer />
        </div>
    )
}
