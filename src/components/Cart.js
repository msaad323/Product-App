import React from "react";
import classes from "./Cart.module.css";
import { useState } from "react";

const ProductList = [
  { id: 1, name: "Product-1", price: 100 },

  { id: 2, name: "Product-2", price: 200 },

  { id: 3, name: "Product-3", price: 300 },
];

const Cart = (props) => {
  
    // const [cartCount, setCartCount] = useState(props.count)

  return (
    <div>
      <div className={classes.cartItems}>
      <h1>Cart</h1>
        {ProductList.map((product) => (
          <div className={classes.cartItem} key={product.id}>
            <h3>{product.name}</h3>
            <p key={product.id}>{props.count} x {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
