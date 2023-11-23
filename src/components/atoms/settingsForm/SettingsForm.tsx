import React from 'react';
import styles from './settingsForm.module.css';

function SettingsForm(): JSX.Element {

    const citiesList = ['Bogota', 'Paris', 'New York', 'Medellin'];

    return (
        <div className={styles.container}>
            <section className={styles.formContainer}>
                <form>
                    <fieldset>
                        <h1 className={styles.title}>Datos del negocio</h1>
                        <div className={styles.row}>
                            <div>
                                <label className={styles.label}>Business Name *</label>
                                <input className={styles.input} type='text' placeholder='Name of your business' />
                            </div>
                            <div>
                                <label className={styles.label}>Business Type *</label>
                                <input className={styles.input} type='text' placeholder='What do your business do?' />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div>
                                <label className={styles.label}>Address *</label>
                                <input className={styles.input} type='text' placeholder='Where is your office' />
                            </div>
                            <div>
                                <label className={styles.label}>City *</label>
                                <select className={styles.input}>
                                    <option></option>
                                    {citiesList.map(citie => <option key={citie}>{citie}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div>
                                <label className={styles.label}>Email *</label>
                                <input className={styles.input} type='email' placeholder='example@example.com' />
                            </div>
                            <button className={styles.button}>Save Changes</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}

export default SettingsForm;