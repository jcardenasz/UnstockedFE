import Swal from 'sweetalert2'
import { type SignInResponse, signIn } from 'next-auth/react'

export async function loginUser(email: string, password: string): Promise<SignInResponse> {
    

    const responseNextAuth = await signIn("credentials", {
        email,
        password,
        redirect: false
    })
    // Juan Camilo - 2023-11-25
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
        // const response = await fetch("http://u-nstocked-bmb5.vercel.app/api/login", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    if ((responseNextAuth?.error) != null) {
        void Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Email or Password!'
        })
        return responseNextAuth;
    }

    
    return responseNextAuth as SignInResponse;
}
