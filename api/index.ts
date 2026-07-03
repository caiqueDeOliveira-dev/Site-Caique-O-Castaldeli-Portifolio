import express from "express";

const app = express();
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "API Caique O Castaldeli rodando", environment: process.env.NODE_ENV || "production" });
});

export default app;
