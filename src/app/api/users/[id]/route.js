import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET(req, con) {
    const res = users.filter((item) => item.id == con.params.id)
    return NextResponse.json(res.length == 0 ? { result: "No DatA Found" } : res, { status: 200 });
}