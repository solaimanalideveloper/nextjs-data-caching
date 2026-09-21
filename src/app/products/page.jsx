import React from "react";
import ProductsCard from "../components/ProductsCard";

const getProductsPromise = async () => {
  const response = await fetch("http://localhost:5000/products", {
    cache: "no-cache",
  });
  return response.json();
};

const ProductsPage = async () => {
  const products = await getProductsPromise();

  return (
    <div>
      <h1>Products Page : {products.length}</h1>
      <div className="grid grid-cols-3 gap-4 text-center">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
