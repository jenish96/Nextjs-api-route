"use client"

import { useState } from "react"

const Page = () => {
    const [user, setUser] = useState()

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        let res = await fetch("http://127.0.0.1:3000/api/users", {
            method: "Post",
            body: JSON.stringify(user)
        })
        res = await res.json()
        res.success ? alert("New User Added") : alert("Error!")
        console.log('res--', res)
    }
    return (
        <div>
            <h1 className="text-center font-semibold pt-5 pb-10">Add User</h1>
            <table className="content-center table bg-slate-300 ">
                <tr>
                    <th>Name &nbsp;</th>
                    <td><input type="text" name="name" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th>Email &nbsp;</th>
                    <td><input type="text" name="email" onChange={handleChange} /></td>
                </tr>
                <br />
                <tr>
                    <td><button onClick={handleSubmit} className="btn">Submit</button></td>
                </tr>
                <br />
            </table>
        </div>
    )
}

export default Page