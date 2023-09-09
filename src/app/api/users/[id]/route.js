import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET(req, con) {
    const res = users.filter((item) => item.id == con.params.id)
    return NextResponse.json(res.length == 0 ? { result: "No DatA Found" } : res, { status: 200 });
}

export async function PUT(req, res) {
    const payload = await req.json();
    payload["id"] = res.params.id
    if (payload.name == "" || payload.email == "") {
        return NextResponse.json({ result: "All Field are required!", success: false }, { status: 400 })
    }
    return NextResponse.json(res.length == 0 ? { result: "No DatA Found" } : { result: payload, success: true }, { status: 200 })
}

export function DELETE(req, res) {
    const id = res.params.id
    if (id) {
        return NextResponse.json({ result: "User Deleted", success: true }, { status: 200 })
    } else {
        return NextResponse.json({ result: "Error!", success: false }, { status: 400 })
    }

}