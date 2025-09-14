// api/mongoClient.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let db;

export async function connectDB() {
    if (!db) {
        try {
            await client.connect();
            db = client.db(process.env.DB_NAME);
            console.log("Connected to MongoDB");
        } catch (err) {
            console.error("MongoDB connection error:", err);
        }
    }
    return db;
}

export default client;
