import { Product } from "@/app/lib/models/Product";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
    const payload = await req.json()
    const id = res.params.product_id
    const data = await Product.updateOne({ _id: id }, payload)
    return NextResponse.json({ result: data })
}