'use client'

import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import { useRouter } from "next/navigation"

const LoginForm = () => {
    const { registerUser, loginUser, googleLogin } = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const router = useRouter()
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex items-center justify-center bg-blue-400 bg-opacity-25">
            <form onSubmit={handleSubmit} className="bg-white py-4 px-6 rounded-xl max-w-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col items-center">
                <h2 className="text-xl text-black">Ingreso</h2>
                <input
                    type="email"
                    value={values.email}
                    required
                    placeholder="Ingresa tu email"
                    className="p-2 rounded w-full border border-blue-100 my-4"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    value={values.password}
                    required
                    placeholder="Ingresa tu contraseña"
                    className="p-2 rounded w-full border border-blue-100 my-4"
                    name="password"
                    onChange={handleChange}
                />
                <div className="w-full flex justify-between">
                    <button className="w-48 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-green-900 text-slate-300 my-2" onClick={() => loginUser(values)} type="submit">
                        Ingresar
                    </button>
                    <button className="w-48 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 my-2" onClick={() => registerUser(values)} type="button">
                        Registrarse
                    </button>
                </div>
                <div className="w-full flex justify-between">
                    <button className="w-48 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 my-2" onClick={googleLogin}>
                        Ingresar con Google
                    </button>
                    <button className="w-48 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-red-900 text-slate-300 my-2" onClick={() => router.push("/")}>
                        Volver a inicio
                    </button>
                </div>
            </form>
        </div>



    )
}
export default LoginForm