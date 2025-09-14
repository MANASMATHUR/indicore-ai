import clientPromise from "./mongoClient.js";

export default async function handler(req, res) {
    try {
        const { userId } = req.query;
        if (!userId) return res.status(400).json({ error: "Missing userId" });

        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME || "indicore_ai");
        const collection = db.collection("chat_memory");

        // Fetch all messages for this user
        const history = await collection
            .find({ userId })
            .sort({ timestamp: 1 }) // oldest first
            .toArray();

        const formatted = history.map(m => ({
            sender: m.fromAI ? "ai" : "user",
            text: m.message
        }));

        res.status(200).json({ history: formatted });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}
