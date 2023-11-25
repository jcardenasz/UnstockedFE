import Swal from 'sweetalert2'

export async function loginUser(email: string, password: string): Promise<{status: number, data: any}> {
    console.log("Backend URL: ", process.env.NEXT_PUBLIC_BACKEND_URL);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
    // const response = await fetch("http://u-nstocked-bmb5.vercel.app/api/login", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    console.log("Response: ", response);
    console.log("Response status: ", response.status);
    const data = await response.json()
    console.log("Response data: ", data);

    if (!response.ok) {
        void Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Email or Password!'
        })
        return { status: response.status, data }
    }else return { status: response.status, data }
}
