export async function getSales(): Promise<Response> {
    const categories = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions/gSales`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await categories.json()
}

export async function addSale(name: string, description: string, paymentMethod: string, saleAmount: number): Promise<Response> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions/cSale`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            description,
            paymentMethod,
            saleAmount
        }),
    });

    return res;
}

