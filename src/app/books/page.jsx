import React from "react";
import Books from "../components/Books";

const getBooksPromise = async () => {

    // ISR 
  const response = await fetch("http://localhost:5000/books", {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch books data");
  }
  return response.json();
};

const BooksPage = async () => {
  const books = await getBooksPromise();
  return (
    <div>
      <h2 className="text-2xl font-bold">Books data: {books.length}</h2>
      <div className="grid grid-cols-3 gap-4 ">
        {books.map((book) => (
          <Books key={book.id} book={book}></Books>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
