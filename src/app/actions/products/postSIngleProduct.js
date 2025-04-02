'use server'

import dbConnect from "@/lib/dbConnect";

export const postSIngleProduct = async (postedData) => {
    try {
        // const postedData = await req.json()
        const result = await (await dbConnect("products")).insertOne(postedData)
        revalidatePath("/products")
        return result
    } catch (error) {

    }
};

