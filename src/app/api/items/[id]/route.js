import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const p = await params;
    const singleData = await (await dbConnect("products")).findOne({ _id: new ObjectId(p.id) })
    return Response.json(singleData)
}


export async function DELETE(req, { params }) {
    const p = await params;
    const res = await (await dbConnect("products")).deleteOne({ _id: new ObjectId(p.id) })
    return Response.json(res)
}


export async function PATCH(req, { params }) {
    const p = await params;
    const postedData = await req.json()
    const filter = { _id: new ObjectId(p.id) }
    const updatedRes = await (await dbConnect("products")).updateOne(filter, { $set: { ...postedData } }, { upsert: true })
    return Response.json(updatedRes)
}