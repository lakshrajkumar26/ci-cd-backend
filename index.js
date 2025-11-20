const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields required" });

  console.log("New Contact Form:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  return res.json({ success: true, message: "Received!" });
});

app.get("/", (req, res) => {
  res.send("Backend Running ✔");
});

const PORT = 5012;
app.listen(PORT, () => console.log("🚀 Server running on port", PORT));
