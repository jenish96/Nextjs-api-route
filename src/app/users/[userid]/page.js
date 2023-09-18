const getUser = async (id) => {
    const data = await fetch(`http://127.0.0.1:3000/api/users/${id}`)
    const res = await data.json()
    return res
}

const Page = async ({params}) => {
    const user = await getUser(params.userid)
    // console.log(user)
    return (
        <div>
            <h1 className="text-center pt-5 font-semibold">User Details</h1>
            <h2>ID : {user[0].id}</h2>
            <h2>Name : {user[0].name}</h2>
            <h2>Email : {user[0].email}</h2>
        </div>
    )
}

export default Page