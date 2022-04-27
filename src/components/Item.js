import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  return (
    <li className={cart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={()=>setCart(!cart)} className={cart?"remove":"add"}>{cart?"Remove":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
