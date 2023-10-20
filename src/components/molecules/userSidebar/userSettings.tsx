import './userSettings.css'
import React from 'react'

const UserSettings = ():JSX.Element => {
    return (
        <div className="usersettings">
            <h1 className="info-title">Información Personal</h1>

            <div className="form">
                <div className="form-group">
                    <label htmlFor="name"> Nombre empresa: </label>
                    <input
                        className="border-4 mx-10px"
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name"> Telefono: </label>
                    <input
                        className="border-4 mx-10px"
                        type="text"
                        name="name"
                        id="name"
                        width="500px"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name"> Correo Asociado:</label>
                    <input
                        className="border-4 mx-10px"
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
            </div>

            <button className="main-button"> Guardar Cambios</button>
        </div>
    )
}

export default UserSettings
