const express = require("express");
const booksRoutes = require("./controller/books.controller");
const authRoutes = require("./controller/auth.controller");
const connectMongoDB = require("./db/mongo.bd");

connectMongoDB();
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/books", booksRoutes);

app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.send(`Server is up and running`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
