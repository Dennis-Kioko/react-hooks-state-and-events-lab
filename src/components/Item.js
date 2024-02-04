import react, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAddItem() {
    setInCart(!inCart);
  }

  return (
    <li className={`item ${inCart ? "in-cart" : ""}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItem}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
