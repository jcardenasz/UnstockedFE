import Swal from 'sweetalert2'
import { type SignInResponse, signIn } from 'next-auth/react'

export async function loginUser(email: string, password: string): Promise<SignInResponse> {

    void fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const responseNextAuth = await signIn("credentials", {
        email,
        password,
        redirect: false
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
