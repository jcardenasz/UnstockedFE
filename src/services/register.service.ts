import { signIn } from "next-auth/react";
import Swal from 'sweetalert2'

export async function registerUser(username: string, email: string, password: string): Promise<Response> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });

    if (!res.ok) {
        void Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong'
        })
        return res;
    }

    const responseNextAuth = await signIn("credentials", {
        email,
        password,
        redirect: false,
    });

    if ((responseNextAuth?.error) != null) {
        void Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong'
        })
        return res;
    }

    return res;
}