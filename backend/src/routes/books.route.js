const express = require("express");
const bookController = require("../controllers/books.controller");
const verifyAuth = require("../middlewares/verifyAuth.middlerware");

const booksRoutes = express.Router();

booksRoutes.get("/", bookController.getAllBooks);

booksRoutes.get("/:id", verifyAuth, bookController.getBookById);

booksRoutes.post("/", verifyAuth, bookController.createBook);

booksRoutes.put("/:id", verifyAuth, bookController.updateBookById);

booksRoutes.delete("/:id", verifyAuth, bookController.deleteBookById);

module.exports = booksRoutes;
