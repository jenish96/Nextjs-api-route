import { NextResponse } from "next/server";
import { writeFile } from "fs/promises"

export async function POST(req, res) {
    const payload = await req.formData()
    const file = payload.get('file')
    if (!file) {
        return NextResponse.json({ result: "File Not Found!" })
    }

    const byteData = await file.arrayBuffer()
    const buffer = Buffer.from(byteData)
    const path = `./public/${file.name}`
    await writeFile(path, buffer)

    return NextResponse.json({ result: "file Uploaded", success: true })
}