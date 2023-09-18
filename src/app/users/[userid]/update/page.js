"use client"
import { useEffect, useState } from "react"


const Page = ({ params }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        getUser()
    }, [])
    // console.log("user--", user.name)

    const getUser = async () => {
        let data = await fetch(`http://127.0.0.1:3000/api/users/${params.userid}`)
        data = await data.json()
        setName(data[0].name)
        setEmail(data[0].email)
    }

    const handleUpdate = async () => {
        console.log(name, email)
        let res = await fetch(`http://127.0.0.1:3000/api/users/${params.userid}`, {
            method: "PUT",
            body: JSON.stringify({ name, email })
        })
        res = await res.json()
        res.success ? alert("User Updated") : alert("Error!")
        console.log("res", res)
    }

    return (
        <div>
            <h1 className="text-center font-semibold pt-5">User Update</h1><br />
            Name :&nbsp;<input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} name="name" />
            <br /><br />
            Email :&nbsp;<input type="text" defaultValue={email} onChange={(e) => setEmail(e.target.value)} name="email" />
            <br /><br />
            <button onClick={handleUpdate} className="btn">Submit</button>

        </div>
    )
}
export default Page