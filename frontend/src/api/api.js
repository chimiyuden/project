import axios from "../configs/axiosConfig"; 

const getAllBooks = () => {
  return axios.get("/books");
};

const getBookById = (id) => {
  return axios.get(`/books/${id}`);
};

const createBook = (bookData) => {
  return axios.post("/books", bookData);
};

const updateBook = (id, bookData) => {
  return axios.put(`/books/${id}`, bookData);
};

const deleteBook = (id) => {
  return axios.delete(`/books/${id}`);
};

export {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};
