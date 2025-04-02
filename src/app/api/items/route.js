import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {

    // const db = await dbConnect("products")
    // const data = await db.find({}).toArray()

    // const data = await dbConnect("products").find().toArray()
    const data = await (await dbConnect("products")).find().toArray();

    // Solve
    // const db = await dbConnect();
    // const data = await db.collection("products").find({}).toArray()

    console.log('WORKING', data);

    // return data
    return Response.json(data)
}

//============================

// import dbConnect from "@/lib/dbConnect";

// export async function GET() {
//     try {
//         const db = await dbConnect(); // Get the database object
//         const collection = db.collection("products"); // Get the collection
//         const data = await collection.find({}).toArray(); // Fetch data

//         console.log("WORKING", data);

//         return new Response(JSON.stringify(data), { status: 200 });
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         return new Response(JSON.stringify({ error: "Failed to fetch products" }), { status: 500 });
//     }
// }

export async function POST(req) {
    const postedData = await req.json()
    const result = await (await dbConnect("products")).insertOne(postedData)
    revalidatePath("/products")
    return Response.json(result)
}