// api/chat.js
import express from "express";

const router = express.Router();

// Handle chat messages
router.post("/", async (req, res) => {
    try {
        const { userId, message } = req.body;

        if (!userId || !message) {
            return res.status(400).json({ error: "Missing userId or message" });
        }

        // For now, just a placeholder AI response
        const aiResponse = `🤖 AI Response: ${message}`;

        // Respond with AI message
        res.status(200).json({ response: aiResponse });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
