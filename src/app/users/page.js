import Link from "next/link"
import DeleteUser from "../util/DeleteUser"

const getUsers = async () => {
    const data = await fetch("http://localhost:3000/api/users")
    const res = await data.json()
    return res
}

const Page = async () => {
    const users = await getUsers()
    // console.log(users)
    return (
        <div>
            <h1 className="text-center pt-5">User Page</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Edit</th>
                </tr>
                {
                    users?.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <Link href={`/users/${item.id}`}>{item.name}</Link>
                            </td>
                            <td>
                                <Link href={`/users/${item.id}/update`}>Edit</Link>
                            </td>
                            <td>
                                <DeleteUser id={item.id} />
                            </td>
                        </tr>
                    )
                    )
                }
            </table>
        </div>
    )
}

export default Page