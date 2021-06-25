import React from 'react'
import cartContext from './CartContext'

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
        <cartContext.provider value={cart_context}>
            {props.children}
        </cartContext.provider>
    )
}

export default CartProvider
