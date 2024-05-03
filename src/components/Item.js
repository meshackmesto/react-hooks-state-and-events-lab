import React, { useState } from "react";


function Item({ name, category }) {
  const [isCart, setIsCart] = useState(false);


  function handleCart(){
    setIsCart((isCart) =>!isCart);
  }
const color = isCart ? 'purple' : 'yellow';
const onCart = isCart ? 'in-Cart' : "";

  return (
    <li className={onCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className={isCart ? "Remove" : "Add"}
      onClick={handleCart} style={{background : color}}>
        {isCart ? "Remove From" : "Add To"}Cart
        </button>
    </li>
  );
}

export default Item;
