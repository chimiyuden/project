import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { createBook, deleteBook, getAllBooks, updateBook } from "../../api/api";
import Nav from "../../components/nav/Nav";
import "./index.css";

const DashBoard = () => {
  const [books, setBooks] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getAllBooks();
      setBooks(response.data?.books || []);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
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
    try {
      await deleteBook(id);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  };

  const handleSaveBook = async (bookData) => {
    try {
      let response;
      if (currentBook) {
        const updatedReadBy = bookData.completed
          ? [...new Set([...(currentBook.readBy || []), user._id])]
          : (currentBook.readBy || []).filter((id) => id !== user._id);

        response = await updateBook(currentBook._id, {
          ...bookData,
          readBy: updatedReadBy,
        });
      } else {
        response = await createBook({
          ...bookData,
          readBy: bookData.completed ? [user._id] : [],
        });
      }
      if (response && response.data) {
        await fetchBooks();
        setDialogOpen(false);
      }
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div>
          <div className="library-header">
            <h1>Book Collection</h1>
            <button onClick={handleAddBook}>Add Book</button>
          </div>

          <div className="book-list">
            {books.length > 0 ? (
              books.map((book) => (
                <div
                  key={book._id}
                  className={`book-card ${
                    book.readBy?.includes(user._id) ? "read-by-user" : ""
                  }`}
                >
                  <div className="spine-crease"></div>

                  <div className="page left-page"></div>
                  <div className="page right-page"></div>

                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">{book.author}</p>
                    <div className="book-meta">
                      <span className="book-genre">{book.genre}</span>
                      <span className="book-year">{book.year}</span>
                    </div>
                    {book.readBy?.includes(user._id) && (
                      <div className="read-status-container">
                        <span className="read-status">
                          Read by {user.name || "you"}
                        </span>
                        {book.readBy.length > 1 && (
                          <span className="read-count">
                            {book.readBy.length - 1} other
                            {book.readBy.length > 2 ? "s" : ""} also read this
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="book-actions">
                    <button onClick={() => handleEditBook(book)}>Edit</button>
                    <button onClick={() => handleDeleteBook(book._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-library">
                Your library is empty. Add some books!
              </div>
            )}
          </div>

          {isDialogOpen && (
            <div className="dialog-overlay">
              <div className="dialog">
                <BookForm
                  book={currentBook}
                  onSave={handleSaveBook}
                  onClose={() => setDialogOpen(false)}
                  currentUser={user._id}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const BookForm = ({ book, onSave, onClose, currentUser }) => {
  const [formData, setFormData] = useState({
    title: book?.title || "",
    author: book?.author || "",
    genre: book?.genre || "Fiction",
    year: book?.year || "",
    completed: book?.readBy?.includes(currentUser) || false,
  });

  const genres = [
    "Science Fiction",
    "Mystery",
    "Fantasy",
    "Romance",
    "Fiction",
    "Nonfiction",
    "Thriller",
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
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>{book ? "Edit Book" : "Add New Book"}</h2>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
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

      <div className="form-group">
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

      <div className="form-group checkbox">
        <label className={formData.completed ? "checked" : ""}>
          <input
            type="checkbox"
            name="completed"
            checked={formData.completed}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          I've read this book
        </label>
      </div>

      <div className="form-actions">
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default DashBoard;
