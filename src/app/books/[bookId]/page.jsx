import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();

  return books.map((book) => ({ bookId: book.id }));
};

const BookDetailPage = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const bookData = await res.json();

  const { id, title, author, price, category, rating, stock, description } =
    bookData;
  return (
    <div>
      <h2>Book Details Page</h2>
      <p>
        <strong>Book ID:</strong> {id}
      </p>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Price:</strong> {price}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Rating:</strong> {rating}
      </p>
      <p>
        <strong>Stock:</strong> {stock}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
};

export default BookDetailPage;
