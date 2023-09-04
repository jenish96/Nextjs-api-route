import { NextResponse } from "next/server";

export async function GET(req) {
    return NextResponse.json({ name: "jenish", city: "Bengaluru" }, { status: 200 })
}