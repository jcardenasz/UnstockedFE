import Swal from 'sweetalert2'

<<<<<<< HEAD
export async function loginUser(email: string, password: string): Promise<{status: number, data: any}> {
    // const response = await fetch(`${process.env.BACKEND_URL}/login`, {
    const response = await fetch("http://u-nstocked-bmb5.vercel.app/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if (!response.ok) {
=======
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
>>>>>>> 4cfb42f8bc8429f06c08f9b12f1c39390047920b
        void Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Email or Password!'
        })
<<<<<<< HEAD
        return { status: response.status, data }
    }
    return { status: response.status, data }
}
=======
        return res;
    }


    return res;
}
>>>>>>> 4cfb42f8bc8429f06c08f9b12f1c39390047920b
