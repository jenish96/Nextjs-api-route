"use client"

import { useState } from "react"

const Page = () => {

    const [product, setProduct] = useState()

    const handelChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handelSubmit = async () => {
        let res = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify(product)
        })
        res = await res.json()
        res.status ? alert("Product Added") : alert("Error!")

        // console.log("AddProduct", res.status)
    }

    return (
        <>
            <h1 className=" pt-10 pl-10 text-2xl float-left">Add Product</h1>
            <br />
            <div className="justify-center pl-10 items-center pt-20">
                Name : &nbsp;<input type="text" name="name" onChange={handelChange} /><br /><br />
                Price : &nbsp;<input type="text" name="price" onChange={handelChange} /><br /><br />
                Company : &nbsp;<input type="text" name="company" onChange={handelChange} /><br /><br />
                Color : &nbsp;<input type="text" name="color" onChange={handelChange} /><br /><br />
                Category : &nbsp;<input type="text" name="category" onChange={handelChange} /><br /><br />

                <button type="button" onClick={handelSubmit} className="btn">Submit</button>
            </div>
        </>
    )
}

export default Page