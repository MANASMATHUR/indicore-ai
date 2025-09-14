// api/chat.js
import express from "express";
import { connectDB } from "./mongoClient.js";

const router = express.Router();

// Save message to memory
router.post("/memory", async (req, res) => {
    try {
        const db = await connectDB();
        const { userId, message } = req.body;

        if (!userId || !message) {
            return res.status(400).json({ error: "Missing userId or message" });
        }

        const memoryCollection = db.collection("memory");
        await memoryCollection.insertOne({ userId, message, timestamp: new Date() });

        res.status(200).json({ status: "Message saved to memory" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Retrieve memory for a user
router.get("/memory/:userId", async (req, res) => {
    try {
        const db = await connectDB();
        const { userId } = req.params;

        const memoryCollection = db.collection("memory");
        const messages = await memoryCollection
            .find({ userId })
            .sort({ timestamp: 1 })
            .toArray();

        res.status(200).json({ messages });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
