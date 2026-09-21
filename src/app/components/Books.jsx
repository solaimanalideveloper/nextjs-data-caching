import Link from "next/link";
import React from "react";

const Books = ({ book }) => {
  const { id, title, description, price } = book;
  return (
    <div className="card card-border bg-base-100">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h1>Books Id: {id}</h1>
        <p>{description}</p>
        <p>Price: {price}</p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          <Link href={`/books/${id}`}>
            <button className="btn btn-primary">Books Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Books;
