export async function getCategories(): Promise<Response> {

    const categories = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await categories.json()
}

export async function addCategory(name: string): Promise<Response> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            description: 'Default Description',
        }),
    });

    return res;
}

export async function deleteCategory(id: string): Promise<Response> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/${id}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    })
    return res;
}