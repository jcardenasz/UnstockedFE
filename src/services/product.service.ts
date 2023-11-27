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

export async function getProduct(id: string): Promise<Response> {

    const product = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/products/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await product.json()
}

export async function addProduct(name: string, description: string, stock: number, picture: string, price: number, category: string): Promise<Response> {

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
            price,
            category,
        }),
    });

    return res;
}

export async function updateProduct(id: string, name: string, description: string, stock: number, picture: string, price: number, category: string): Promise<Response> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/products/${id}`, {
        method: "PUT",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            description,
            stock,
            picture,
            price,
            category,
        }),
    });

    return res;
}

export async function deleteProduct(id: string): Promise<Response> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/products/${id}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    })
    return res;
}