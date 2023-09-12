import { Product } from "@/app/lib/models/Product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// import "@/app/lib/db"

export async function PUT(req, res) {
    await mongoose.connect(process.env.MONGO_DB)

    const payload = await req.json()
    const id = res.params.product_id
    const data = await Product.updateOne({ _id: id }, payload)
    return NextResponse.json({ result: data })
}

export async function GET(req, res) {
    await mongoose.connect(process.env.MONGO_DB)

    const id = res.params.product_id
    const data = await Product.findById(id);
    return NextResponse.json({ result: data })
}