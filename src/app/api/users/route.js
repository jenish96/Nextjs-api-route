import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET() {
    const data = users;
    return NextResponse.json(data, { status: 200 });
}

export async function POST(req, res) {
    const payload = await req.json()
    // console.log(payload)
    if (!payload.name || !payload.email) {
        return NextResponse.json({ result: "Require Fields Not Found!", success: false }, { status: 400 })
    }
    return NextResponse.json({ result: payload, success: true }, { status: 201 })
}