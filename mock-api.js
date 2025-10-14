// Simple mock API server for testing ChatWidget
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
let mockChats = [
  {
    id: 1,
    chatName: "Test Chat 1",
    lastUpdated: new Date().toISOString(),
    messages: [],
  },
  {
    id: 2,
    chatName: "Test Chat 2",
    lastUpdated: new Date().toISOString(),
    messages: [],
  },
];

// Mock API endpoints
app.get("/react/ai/chats", (req, res) => {
  console.log("GET /react/ai/chats");
  res.json(mockChats);
});

app.post("/react/ai/chats", (req, res) => {
  console.log("POST /react/ai/chats", req.body);
  const newChat = {
    id: mockChats.length + 1,
    chatName: req.body.contextName || "New Chat",
    lastUpdated: new Date().toISOString(),
    messages: [],
  };
  mockChats.push(newChat);
  res.json(newChat);
});

app.get("/react/ai/chats/:id", (req, res) => {
  const chatId = parseInt(req.params.id);
  const chat = mockChats.find((c) => c.id === chatId);
  if (chat) {
    res.json(chat);
  } else {
    res.status(404).json({ error: "Chat not found" });
  }
});

app.post("/react/ai/chats/:id/messages", (req, res) => {
  const chatId = parseInt(req.params.id);
  const chat = mockChats.find((c) => c.id === chatId);
  if (chat) {
    const userMessage = {
      id: `user-${Date.now()}`,
      messageContent: req.body.messageContent,
      role: "user",
      timestamp: new Date().toISOString(),
    };

    const aiMessage = {
      id: `ai-${Date.now()}`,
      messageContent: `Mock AI response to: "${req.body.messageContent}"`,
      role: "assistant",
      timestamp: new Date().toISOString(),
    };

    chat.messages.push(userMessage, aiMessage);
    chat.lastUpdated = new Date().toISOString();

    res.json({
      userMessage,
      aiMessage,
      chatId: chat.id,
    });
  } else {
    res.status(404).json({ error: "Chat not found" });
  }
});

app.delete("/react/ai/chats/:id", (req, res) => {
  const chatId = parseInt(req.params.id);
  const index = mockChats.findIndex((c) => c.id === chatId);
  if (index !== -1) {
    mockChats.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Chat not found" });
  }
});

app.get("/react/ai/contexts/:id/info", (req, res) => {
  const contextId = req.params.id;
  res.json({
    id: contextId,
    systemPrompt: "You are a helpful AI assistant.",
  });
});

app.patch("/react/ai/contexts/:id/info", (req, res) => {
  const contextId = req.params.id;
  res.json({
    id: contextId,
    systemPrompt: req.body.systemPrompt || "You are a helpful AI assistant.",
  });
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});

