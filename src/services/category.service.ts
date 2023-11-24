// import Swal from 'sweetalert2'

export async function getCategories(): Promise<Response> {
    const categories = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`, {
        method: 'GET',
        headers: {
            'Cache-Control': 'max-age=120',
            "Content-Type": "application/json"
        }
    });
    return await categories.json()

}