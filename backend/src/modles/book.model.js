//book model
const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: {
    type: String,
    enum: ["Science Fiction", "Mystery", "Fantasy", "Romance", "Fictional"],
    required: true,
  },
  year: { type: Number, required: true },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
