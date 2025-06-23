const express = require("express");
const cors = require("cors");
const booksRoutes = require("./routes/books.route");
const authRoutes = require("./routes/auth.route");
const connectMongoDB = require("./db/mongo.db");
const { frontendUrl } = require("./configs");

const app = express();
const PORT = 3000;

connectMongoDB();

app.use(cors({ origin: frontendUrl, credentials: true }));
app.use(express.json());

app.use("/books", booksRoutes);
app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.send("Server is up and running");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
