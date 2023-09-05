import Link from "next/link"

const getUsers = async () => {
    const data = await fetch("http://localhost:3000/api/users")
    const res = await data.json()
    return res
}

const Page = async () => {
    const users = await getUsers()
    console.log(users)
    return (
        <div>
            <h1 className="text-center pt-5">User Page</h1>
            {
                users?.map((item, index) => (
                    <div>
                        <Link href={`/users/${item.id}`}>{item.name}</Link>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Page