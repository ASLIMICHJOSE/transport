import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

require('dotenv').config();
const API_KEY= process.env.GROQ_API_KEY;

// API route for chat
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API HTTP Error:", errorText);
      return res.status(500).json({ reply: "⚠️ Error: Groq API returned an error." });
    }

    const data = await response.json();
    console.log("API Response:", data); // Debug log
    res.json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error("Groq API Error:", err);
    res.status(500).json({ reply: "⚠️ Error: Unable to connect to Groq API." });
  }
});

// Start server
app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));