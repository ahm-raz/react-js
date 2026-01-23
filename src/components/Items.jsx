import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Context'
const Items = (props) => {
  const cartValue = useContext(CartContext);
  
  const handleAddToCart = () => {
    cartValue.addToCart({
      name: props.name,
      price: props.price
    });
  };
  
  return (
    <div className="item-card">
        <h2 className="item-name">{props.name}</h2>
        <p className="item-price">${props.price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
    </div>
  )
}

export default Items