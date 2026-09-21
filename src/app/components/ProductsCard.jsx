import React from "react";

const ProductsCard = ({ product }) => {
    const { id, name, description, price } = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">${price.toFixed(2)}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
