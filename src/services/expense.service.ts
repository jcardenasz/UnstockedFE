export async function getExpenses(): Promise<Response> {

    const categories = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions/gExpenses`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await categories.json()
}

export async function addExpense(name: string, description:string, paymentMethod: string, expenseAmount: number, supplier: string): Promise<Response> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions/cExpense`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
			paymentMethod,
            supplier,
			expenseAmount,
            description: 'Default Description'
        }),
    });

    return res;
}