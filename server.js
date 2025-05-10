const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let fakeInbox = {};

function generateRandomEmail() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const name = Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return name + "@fake-temp.com";
}

app.get("/generate-email", (req, res) => {
  const email = generateRandomEmail();
  fakeInbox[email] = [];
  res.json({ email });
});

app.get("/inbox/:email", (req, res) => {
  const { email } = req.params;
  res.json(fakeInbox[email] || []);
});

app.get("/message/:email/:id", (req, res) => {
  const { email, id } = req.params;
  const inbox = fakeInbox[email] || [];
  const message = inbox.find(msg => msg.id === id);
  if (message) {
    res.json(message);
  } else {
    res.status(404).json({ error: "Message not found" });
  }
});

// أضف رسالة وهمية للاختبار
app.post("/send", (req, res) => {
  const { to, from, subject, content } = req.body;
  if (!fakeInbox[to]) fakeInbox[to] = [];
  const id = Date.now().toString();
  fakeInbox[to].push({ id, from, subject, content });
  res.json({ success: true, id });
});

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
