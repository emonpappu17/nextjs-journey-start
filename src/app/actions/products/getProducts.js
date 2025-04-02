"use server";

import dbConnect from "@/lib/dbConnect";

export const getProducts = async () => {
    try {
        const data = await (await dbConnect("products")).find({}).toArray();
        return data
    } catch (error) {
        console.log(error);
        return []
    }

};

