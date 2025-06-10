const booksService = require("../services/books.service");

const deleteBookById = async (req, res) => {
  const id = req.params.id;
  const isDeleted = await booksService.deleteBookById(id);

  if (isDeleted) {
    res.json({ message: `book ${id} deleted successfully` });
  } else {
    res.status(404).json({ message: `book ${id} not found` });
  }
};

const getAllBooks = async (req, res) => {
  const books = await booksService.getAllBooks();
  res.json({ books });
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  const book = await booksService.getBookById(id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: `Book ${id} not found` });
  }
};

const createBook = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: `Body cannot be Empty`,
    });
  }
  const newBook = req.body;

  const keys = Object.keys(newBook);
  const requireKeys = ["title", "author", "publishedYear"];

  const missingKeys = requireKeys.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all information: ${missingKeys.join(",")}`,
    });
  }

  if (typeof newBook.year !== "number") {
    return res.status(400).json({
      message: `publishedYear should be a number`,
    });
  }
  const createdBook = await booksService.createBook(newBook);
  res.status(201).json({ message: " New book created", book: createdBook });
};

const updateBookById = async (req, res) => {
  const id = req.params.id;

  if (!req.body) {
    return res.status(400).json({
      message: `Body cannot be Empty`,
    });
  }
  const newBook = req.body;

  const keys = Object.keys(newBook);
  const requireKeys = ["title", "author", "publishedYear"];
  const missingKeys = requireKeys.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all information: ${missingKeys.join(",")}`,
    });
  }

  if (typeof newBook.year !== "number") {
    return res.status(400).json({
      message: `published Year should be a number`,
    });
  }
  const updateBook = await booksService.updateBookById(id, newBook);
  if (updateBook) {
    res.json({
      message: `Book ${id} update successfully`,
      book: updateBook,
    });
  } else {
    res.status(404).json({ message: `book ${id} not found` });
  }
};

module.exports = {
  deleteBookById,
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
};
