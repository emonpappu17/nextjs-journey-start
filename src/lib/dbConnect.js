import { MongoClient, ServerApiVersion } from "mongodb";

const dbConnect =async (collectionName) => {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    // await client.connect();
    // await client.connect().db("admin").command({ ping: 1 });
    // return client.db('emaJohnDB').collection(collectionName)


    // return client.db(process.env.DB_NAME)
    return client.db(process.env.DB_NAME).collection(collectionName)
}

export default dbConnect;

//========================================================

// import { MongoClient, ServerApiVersion } from "mongodb";

// // const uri = process.env.MONGODB_URI;
// const uri = "mongodb+srv://ema-john:vlz7tw9W7UpPkQcm@cluster0.aezqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// if (!uri) throw new Error("Missing MONGODB_URI in environment variables");

// const options = {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// };

// // Use a cached connection to avoid multiple re-connections in Next.js API routes
// let client;
// let db;

// const dbConnect = async (collectionName) => {
//     if (!client) {
//         client = new MongoClient(uri, options);
//         await client.connect();  // Establish connection only once
//         db = client.db("emaJohnDB");
//         // db = client.db(process.env.DB_NAME || "emaJohnDB");
//         console.log("Connected to MongoDB!");
//     }
//     return db.collection(collectionName);
// };

// export default dbConnect;

//========================================

// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = "mongodb+srv://ema-john:vlz7tw9W7UpPkQcm@cluster0.aezqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// if (!uri) throw new Error("Missing MONGODB_URI in environment variables");

// const options = {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// };

// // Cached connection for better performance in Next.js
// let clientPromise;
// let db;

// const dbConnect = async () => {
//     if (!clientPromise) {
//         const client = new MongoClient(uri, options);
//         clientPromise = client.connect();
//     }
//     const client = await clientPromise; // Ensure connection is resolved
//     db = client.db("emaJohnDB");
//     console.log("Connected to MongoDB!");
//     return db; // Return the database object, not a collection
// };

// export default dbConnect;

