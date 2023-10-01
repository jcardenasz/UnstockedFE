'use client'

import React from 'react'
import { FaGoogle, FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { fetchUser } from '@/Services/login.service'

const user = {
    email: '',
    password: ''
}
export default function Page(): JSX.Element {
    return (
        <>
            <head className="">
                <title>Log in page</title>
            </head>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-purple-600">
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <div className="bg-white rounded-2xl shadow-[#000000] shadow-lg flex w-2/3 max-w-4xl">
                        <div className="w-3/5 p-6">
                            <div className="text-left font-bold">
                                <span className="text-purple-600">UN</span>
                                stocked
                            </div>
                            <div className="py-10">
                                <h2 className="text3xl font-bold text-purple-600 mb-2">
                                    Inicia Sesión
                                </h2>
                                <div className="border-2 w-10 border-purple-600 inline-block mb-2"></div>
                                <div className="flex justify-center my-2">
                                    <a
                                        href="#"
                                        className="border-2 border-gray-200 rounded-full p-3 mx-1"
                                    >
                                        <FaGoogle className="text-sm" />
                                    </a>
                                </div>
                                <p className="text-gray-400 my-3">
                                    o utiliza tu correo electrónico.
                                </p>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-2xl">
                                        <FaRegEnvelope className="text-gray-400 m-2" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="bg-gray-100 outline-none text-sm flex-1"
                                            onChange={(e) => {
                                                user.email = e.target.value
                                                console.log(e.target.value)
                                            }
                                        }
                                        />
                                    </div>
                                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl">
                                        <MdLockOutline className="text-gray-400 m-2" />
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="bg-gray-100 outline-none text-sm flex-1"
                                            onChange={(e) => {
                                                user.password = e.target.value
                                                console.log(e.target.value)
                                            }
                                        }
                                        />
                                    </div>
                                    <div className="flex justify-between w-64 m-4">
                                        <label className="flex- items-center text-xs">
                                            <input
                                                type="checkbox"
                                                name="remember"
                                                className="mr-1"
                                            />
                                            Recordarme
                                        </label>
                                        <a href="#" className="text-xs">
                                            Olvidé mi contraseña
                                        </a>
                                    </div>
                                    <button
                                        className="border-2 border-purple-600 rounded-full px-12 py-2 inline-block font-semibold hover:text-white hover:bg-purple-600"
                                        // eslint-disable-next-line @typescript-eslint/no-misused-promises
                                        onClick={async () => {
                                            try {
                                                await fetchUser(user,'login')
                                            } catch (e) {
                                                console.error(e)
                                            }
                                        }}
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/5 bg-purple-300 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                            <h2
                                className="text-3xl font-bold mb-2
                            }"
                            >
                                Administra tu inventario
                            </h2>
                            <div className="border-2 w-10 border-white inline-block mb-2"></div>
                            <p className="m-8">Regístrate</p>
                            <a
                                href="#"
                                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-300"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
