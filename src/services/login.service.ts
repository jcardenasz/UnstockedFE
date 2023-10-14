export async function fetchUser(user:any,link:string): Promise<any> {
    const response = await fetch(`http://localhost:4000/api/${link}`, {method: 'POST', body: JSON.stringify(user), headers: {'Cache-Control':'max-age=120','Content-Type': 'application/json'}})
    const data = await response.json()
    console.log(data)
    return data
}
