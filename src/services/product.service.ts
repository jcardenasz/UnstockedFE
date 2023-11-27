export async function getProducts(): Promise<Response> {

    const categories = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/products`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await categories.json()
}

export async function addProduct(name: string, description: string, stock: number, picture: string, price: number): Promise<Response> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/products`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            description,
            stock,
            picture,
            price
        }),
    });

    return res;
}
export async function deleteCategory(id: string): Promise<Response> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/products/${id}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    })
    return res;
}