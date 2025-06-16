const initialData = {
  title: "",
  author: "",
  genre: "Science Fiction",
  year: new Date().getFullYear(),
};

const Home = () => {
  const handelDialog = () => {
    setDialogOpen(isOpen);
    if (!isOpen) {
      setForm({ ...initialData });
    }
  };
  return (
    <div>
      <h1>Book Collection</h1>
      <button className="add-button" onClick={() => handelDialog(true)}>
        Add Book
      </button>
    </div>
  );
};

export default Home;
