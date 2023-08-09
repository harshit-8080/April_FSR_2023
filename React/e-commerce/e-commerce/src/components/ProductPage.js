import React, { useEffect, useState } from "react";
import "../styles/ProductPage.css";

function ProductPage() {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async function f1() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    })();
  }, []);

  return (
    <div>
      {products?.map((product) => {
        return (
          <div className="product">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
              <button className="btn">Add To Cart</button>
            </div>
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-category">Category: {product.category}</p>
              <div className="product-rating">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductPage;
