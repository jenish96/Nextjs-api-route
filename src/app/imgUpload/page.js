"use client"

import { useState } from "react"

const Page = () => {
    const [file, setFile] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.set("file", file)
        let res = await fetch("http://localhost:3000/api/upload", {
            method: "POST",
            body: data
        })
        res = await res.json()
        if (res.success) {
            alert(res.result)
        } else {
            alert("Error!")
        }
    }
    return (
        <>
            <h1>Upload Image</h1>
            <form className="pt-10 pl-10" onSubmit={handleSubmit}>
                <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} />
                <br /><br />
                <button type="submit" className="btn">Submit</button>
            </form>
        </>
    )
}

export default Page