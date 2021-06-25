import React from 'react'
import cartContext from './CartContext'

const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {}
    const removeItemFromCartHandler = (itemId) => {}
    const cartContext = {
      items: [],
      totalAmount: 0,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler
    };
    return (
        <cartContext.provider value={cartContext}>
            {props.children}
        </cartContext.provider>
    )
}

export default CartProvider
