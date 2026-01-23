import { createContext, useState } from 'react'

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };
    
    const removeFromCart = (itemName) => {
        setCart(prevCart => prevCart.filter(item => item.name !== itemName));
    };
    
    const updateQuantity = (itemName, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(itemName);
            return;
        }
        setCart(prevCart =>
            prevCart.map(item =>
                item.name === itemName
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };
    
    const clearCart = () => {
        setCart([]);
    };
    
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
    };
    
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice }}>
            {props.children}
        </CartContext.Provider>
    )
}