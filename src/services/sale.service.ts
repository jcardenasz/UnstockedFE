export async function getSales(): Promise<Response> {

    const categories = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/transactions/gSales`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await categories.json()
}

export async function addSale(name: string, description:string, paymentMethod: string, saleAmount: number,stock: number): Promise<Response> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/transactions/cSale`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
			paymentMethod,
            stock,
            saleAmount,
            description,
        }),
    });

    return res;
}

