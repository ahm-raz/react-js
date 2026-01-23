import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Context'

const Cart = () => {
    const cartValue = useContext(CartContext);
    const totalPrice = cartValue.getTotalPrice();
    
    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Shopping Cart</h2>
                {cartValue.cart.length > 0 && (
                    <button className="clear-cart-btn" onClick={cartValue.clearCart}>
                        Clear Cart
                    </button>
                )}
            </div>
            
            {cartValue.cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <span className="empty-cart-icon">🛒</span>
                </div>
            ) : (
                <>
                    <ul className="cart-items">
                        {cartValue.cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <div className="cart-item-info">
                                    <span className="cart-item-name">{item.name}</span>
                                    <span className="cart-item-price">${parseFloat(item.price).toFixed(2)}</span>
                                </div>
                                <div className="cart-item-controls">
                                    <button 
                                        className="quantity-btn"
                                        onClick={() => cartValue.updateQuantity(item.name, item.quantity - 1)}
                                    >
                                        −
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button 
                                        className="quantity-btn"
                                        onClick={() => cartValue.updateQuantity(item.name, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                    <button 
                                        className="remove-btn"
                                        onClick={() => cartValue.removeFromCart(item.name)}
                                        title="Remove item"
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className="cart-item-total">
                                    ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span className="total-label">Total:</span>
                            <span className="total-price">${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart