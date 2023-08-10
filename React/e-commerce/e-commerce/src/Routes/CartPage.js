import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotalPrice, removeFromCart } from "../redux/CartSlice";

function CartPage() {
  const cartList = useSelector((store) => store.cart.cartList);
  const totalPrice = useSelector((store) => store.cart.totalPrice);

  const dispatch = useDispatch();
  function handleClick(product) {
    dispatch(removeFromCart(product));
    dispatch(calculateTotalPrice());
  }

  return (
    <div>
      <h1>Total Cart Page Amount - {totalPrice} </h1>
      {cartList?.map((product) => {
        return (
          <div className="product">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
              <br />
              <br />
              <br />
              <img
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
                src="https://icons.veryicon.com/png/o/miscellaneous/h5-general-system-icon/clear-18.png"
                alt=""
                onClick={() => {
                  handleClick(product);
                }}
              />
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

export default CartPage;
