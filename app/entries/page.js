import Link from "next/link"

async function getData() {
    const response = await fetch("http://localhost:3000/api",
        // {cache: 'force-cache'}
        // {cache: 'no-store'} // default from next.js 15 on
        {next: {revalidate: 5}}
    )

    if (response.ok) {
        return await response.json()
    } else {
        console.error("Fetch error: ",error)
        return JSON.toJson({})
    }
}

export const metadata = {
    title: "Entries"
}

export default async function Entries() {
    const entries = await getData()

    return (<>
        <main>
            <h1>Persons</h1>
            <ul>
                {entries.map(({_id, firstname, lastname}) => (
                    <li key={_id}><em>{_id}</em> -- {firstname}</li>
                ))}
            </ul>
            <Link href="/">Home</Link>
        </main>
    </>)
}