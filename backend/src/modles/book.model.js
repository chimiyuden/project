// //book model
// const mongoose = require("mongoose");

// const BookSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   genre: {
//     type: String,
//     enum: [
//       "Science Fiction",
//       "Mystery",
//       "Fantasy",
//       "Romance",
//       "Fiction",
//       "Nonfiction",
//     ],
//     required: true,
//   },
//   year: String,
// });

// const Book = mongoose.model("Book", BookSchema);
// module.exports = Book;

const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: {
    type: String,
    enum: [
      "Science Fiction",
      "Mystery",
      "Fantasy",
      "Romance",
      "Fiction",
      "Nonfiction",
      "Thriller",
    ],
    required: true,
  },
  year: String,
  readBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
