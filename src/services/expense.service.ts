export async function getExpenseses(): Promise<Response> {

    const categories = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/transactions/gExpenses`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await categories.json()
}

export async function addExpense(name: string, description:string, paymentMethod: string, ExpenseAmount: number, supplier: string): Promise<Response> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/categories/cExpense`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
			paymentMethod,
            date: 'Default Date',
            supplier,
			ExpenseAmount,
            description: 'Default Description'
        }),
    });

    return res;
}