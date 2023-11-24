import Swal from 'sweetalert2'

export async function loginUser(email: string, password: string): Promise<Response> {

    /* const responseNextAuth = await signIn("credentials", {
        email,
        password,
        redirect: false
    }) */

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
        method: "POST",
        headers: {
            'Cache-Control': 'max-age=120',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    console.log(res.json());

    if ((!res.ok)) {
        void Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Email or Password!'
        })
        return res;
    }


    return res;
}
