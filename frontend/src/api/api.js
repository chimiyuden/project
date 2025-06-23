import axios from "../configs/axiosConfig";

const registerUser = async (formData) => {
  return axios.post("/auth/signup", formData);
};

const loginUser = async (formData) => {
  return axios.post("/auth/signin", formData);
};
const getloginUser = async () => {
  return axios.get("/auth/loginuser");
};

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
  deleteBook,
  registerUser,
  loginUser,
  getloginUser,
};
