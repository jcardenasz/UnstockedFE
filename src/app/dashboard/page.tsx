import React from 'react';

// import { useRouter } from 'next/navigation'

/**
 * Esta es la pantalla de inicio
 * @returns {JSX.Element}: The JSX Code for home page.
 */

export default function Dashboard(): JSX.Element {

    return (
        <div>
            <section>
                <form>
                    <fieldset>
                        <label>Business Name</label>
                        <input type='text' placeholder='Name of your business' />
                        <label>Business Type</label>
                        <input type='text' placeholder='What do your business do?' />
                        <label>Address</label>
                        <input type='text' placeholder='Where is your office' />
                        <label>City</label>
                        <select>
                            <option>City 1</option>
                            <option>City 2</option>
                            <option>City 3</option>
                            <option>City 4</option>
                        </select>
                        <label>Email</label>
                        <input type='email' placeholder='example@example.com' />
                        <button>Save Changes</button>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}
