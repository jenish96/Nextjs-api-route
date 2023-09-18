import Link from "next/link"
import DeleteProduct from "../util/DeleteProduct"

const getProducts = async () => {
    let data = await fetch("http://127.0.0.1:3000/api/products", { cache: "no-cache" })
    data = await data.json()
    return data.result
}

const Page = async () => {
    const products = await getProducts()
    // console.log("products--",products)

    return (
        <>
            <br />
            <h1 className="float-left">Product Page</h1>
            <h1><Link href="/products/addProduct">Add Product</Link></h1>
            <br />
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Company</th>
                    <th>Color</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
                {
                    products?.map((item, index) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.company}</td>
                            <td>{item.color}</td>
                            <td>{item.category}</td>
                            <td><Link href={`/products/${item._id}`}> Edit</Link>&nbsp;|&nbsp;
                                <DeleteProduct id={item._id} />
                            </td>
                        </tr>
                    )
                }
            </table >
        </>
    )
}

export default Page