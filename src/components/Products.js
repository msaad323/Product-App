import React from "react";
import classes from "./Products.module.css";
import Cart from "./Cart";
import { useState } from "react";

const ProductList = [
  { id: 1, name: "Product-1", price: 100 },

  { id: 2, name: "Product-2", price: 200 },

  { id: 3, name: "Product-3", price: 300 },
];

const Products = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementHandler = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      } else return 0;
    });
  };

  return (
    <div>
      <div className={classes.products}>
        <h1>Products</h1>
        {ProductList.map((product, index) => (
          <div className={classes.product}  key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className={classes.counter}>
              <button onClick={decrementHandler}>-</button>
              <span key={product.id}>{count}</span>
              <button onClick={incrementHandler}>+</button>
            </div>
          </div>
        ))}
      </div>
        <Cart count={count}/>
    </div>
  );
};

export default Products;
