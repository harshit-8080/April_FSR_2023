import React, { useEffect, useState } from "react";
import "../styles/ProductPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/ProductSlice";
import { addToCart, calculateTotalPrice } from "../redux/CartSlice";

function ProductPage() {
  const products = useSelector((store) => store.product.productList);
  const cartList = useSelector((store) => store.cart.cartList);

  const dispatch = useDispatch();
  useEffect(() => {
    (async function f1() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      dispatch(addProduct(data));
    })();
  }, []);

  function handleClick(product) {
    let duplicate = false;

    for (let i = 0; i < cartList.length; i++) {
      if (product.title == cartList[i].title) {
        duplicate = true;
      }
    }
    if (!duplicate) {
      dispatch(addToCart(product));
      dispatch(calculateTotalPrice());
    } else {
      alert("Already added to cart");
    }
  }

  return (
    <div>
      {products?.map((product) => {
        return (
          <div className="product">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
              <button
                className="btn"
                onClick={() => {
                  handleClick(product);
                }}
              >
                Add To Cart
              </button>
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
