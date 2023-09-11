import { Product } from "@/app/lib/models/Product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
// import "@/app/lib/db"

export async function GET() {

    try {
        // await mongoose.connect(process.env.MONGO_DB)

        const data = await Product.find()
        return NextResponse.json({ result: data, status: true })

    } catch (err) {
        return NextResponse.json({ result: "Error occured!", status: false })
    }
}

export async function POST(req, res) {
    const payload = await req.json()
    let product = new Product(payload)
    let data = await product.save()

    // const data = await Product.insertMany(payload)
    return NextResponse.json({ result: data, status: true })
}