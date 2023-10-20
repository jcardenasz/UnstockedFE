'use client'

import React from 'react'
import UserSidebar from '../userSidebar/UserSidebar'
import './profileform.css'
import { usePathname } from 'next/navigation'
import UserSettings from '../userSidebar/userSettings'

export default function ProfileForm(): JSX.Element {
    const activepage = usePathname()
    return (
        <div className="userprofile">
            <div className="userprofilein">
                <div className="left">
                    <UserSidebar activepage={activepage} />
                </div>
                <div className="right">
                    <UserSettings />
                    {activepage === 'usersettings' && <UserSettings />}
                </div>
            </div>
        </div>
    )
}
