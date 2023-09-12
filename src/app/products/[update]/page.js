"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const Page = (props) => {
    const [product, setProduct] = useState()
    const [data, setData] = useState()
    const id = props.params.update
    const getProduct = async () => {
        let res = await fetch(`http://localhost:3000/api/products/${id}`)
        res = await res.json()
        setProduct(res.result)
    }

    useEffect(() => {
        getProduct()
    }, [])

    const handelChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handelUpdate = async () => {
        // let res = await fetch(`http://localhost:3000/api/products/${id}`, {
        //     method: "PUT",
        //     body:
        // })
        console.log("Hello, handelUpdate")
    }
    return (
        <>
            <h1>Edit Product</h1>
            <div className="justify-center pl-10 items-center pt-20">
                Name : &nbsp;<input type="text" name="name" defaultValue={product?.name} onChange={handelChange} /><br /><br />
                Price : &nbsp;<input type="text" name="price" defaultValue={product?.price} onChange={handelChange} /><br /><br />
                Company : &nbsp;<input type="text" name="company" defaultValue={product?.company} onChange={handelChange} /><br /><br />
                Color : &nbsp;<input type="text" name="color" defaultValue={product?.color} onChange={handelChange} /><br /><br />
                Category : &nbsp;<input type="text" name="category" defaultValue={product?.category} onChange={handelChange} /><br /><br />

                <button type="button" onClick={handelUpdate} className="btn">Update</button>
            </div>
            <br/>
            <Link href="/products"><b>Back TO Product</b></Link>
        </>
    )
}

export default Page