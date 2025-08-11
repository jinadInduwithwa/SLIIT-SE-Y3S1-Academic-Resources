import { useEffect, useState } from "react";
import { getAllBooks } from "../api/books";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then((res) => setBooks(res.data.books));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => <BookCard key={book._id} book={book} />)}
      </div>
    </div>
  );
};

export default Home;