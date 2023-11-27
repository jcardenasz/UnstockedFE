import SettingsForm from '@/components/atoms/settingsForm/SettingsForm';
import SettingsHeader from '@/components/atoms/settingsHeader/SettingsHeader';
import React from 'react';

// import { useRouter } from 'next/navigation'

/**
 * Esta es la pantalla de inicio
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Dashboard(): JSX.Element {

    return (
        <>
            <SettingsHeader />
            <SettingsForm />
        </>
    )
}
