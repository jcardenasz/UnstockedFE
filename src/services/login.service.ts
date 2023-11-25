import Swal from 'sweetalert2'

export async function loginUser(email: string, password: string): Promise<{status: number, data: any}> {
    console.log("Backend URL: ", process.env.NEXT_PUBLIC_BACKEND_URL);
     const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
    // const response = await fetch("http://u-nstocked-bmb5.vercel.app/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    const data = await response.json()

    if (!response.ok) {
        void Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Email or Password!'
        })
        return { status: response.status, data }
    }else return { status: response.status, data }
}
