import { Link } from "react-router-dom";

const BookCard = ({ book }) => (
  <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-lg font-semibold">{book.title}</h3>
    <p className="text-sm text-gray-600">by {book.author}</p>
    <p className="mt-1">${book.price}</p>
    <Link to={`/book/${book._id}`} className="text-blue-600 underline mt-2 block">
      View Details
    </Link>
  </div>
);

export default BookCard;