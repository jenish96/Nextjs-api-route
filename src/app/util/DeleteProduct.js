"use client"

import { useRouter } from "next/navigation"


const DeleteProduct = ({ id }) => {
    const router = useRouter()

    const handelDelete = async () => {
        let res = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "DELETE"
        })
        res = await res.json()
        if (res.result.deletedCount) {
            alert("Product Deleted")
            router.push("/products")
        } else { alert("Error!") }
    }
    return (
        <button onClick={handelDelete} className="btn">Delete</button>
    )
}

export default DeleteProduct