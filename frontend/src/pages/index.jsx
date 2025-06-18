import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getAllBooks } from "../api/api";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getAllBooks();
      setBooks(response.data?.books || []);
    };
    fetchBooks();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const handleAddBook = () => {
    setCurrentBook(null);
    setDialogOpen(true);
  };

  const handleEditBook = (book) => {
    setCurrentBook(book);
    setDialogOpen(true);
  };

  const handleDeleteBook = async (id) => {
    setBooks(books.filter((book) => book._id !== id));
  };

  const handleSaveBook = (bookData) => {
    if (currentBook) {
      setBooks(
        books.map((book) =>
          book._id === currentBook._id ? { ...book, ...bookData } : book
        )
      );
    } else {
      setBooks([...books, { ...bookData, _id: Date.now().toString() }]);
    }
    setDialogOpen(false);
  };

  return (
    <div>
      <nav>
        <div>MyLibrary</div>
        <div>
          <span>{user?.name || "User"}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div>
        <div>
          <h1>Book Collection</h1>
          <button onClick={handleAddBook}>Add Book</button>
        </div>

        <div>
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book._id}>
                <div>
                  <h3>{book.title}</h3>
                  <p>by {book.author}</p>
                  <div>
                    <span>{book.genre}</span>
                    <span>{book.year}</span>
                  </div>
                  {book.completed && <span>Read</span>}
                </div>
                <div>
                  <button onClick={() => handleEditBook(book)}>Edit</button>
                  <button onClick={() => handleDeleteBook(book._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>Your library is empty. Add some books!</div>
          )}
        </div>

        {isDialogOpen && (
          <div>
            <div>
              <BookForm
                book={currentBook}
                onSave={handleSaveBook}
                onClose={() => setDialogOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BookForm = ({ book, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    title: book?.title || "",
    author: book?.author || "",
    genre: book?.genre || "Fiction",
    year: book?.year || "",
    completed: book?.completed || false,
  });

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Romance",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{book ? "Edit Book" : "Add New Book"}</h2>

      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Genre</label>
        <select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Year</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          min="0"
          max={new Date().getFullYear()}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="completed"
            checked={formData.completed}
            onChange={handleChange}
          />
          I've read this book
        </label>
      </div>

      <div>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default Home;
