import React from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {}
    const removeItemFromCartHandler = (itemId) => {}
    const cart_context = {
      items: [],
      totalAmount: 0,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler
    };
    return (
        <CartContext.Provider value={cart_context}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
