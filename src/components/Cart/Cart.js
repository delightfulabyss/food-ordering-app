import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/CartContext'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartCTX = useContext(CartContext)
    const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`
    const hasItems = cartCTX.items.length > 0 

    const cartItemRemoveHandler = (itemId) => {
        
    }

    const cartItemAddHandler = (item) => {
        cartCTX.addItem({...item, amount: 1})
    }

    const cartItems = <ul className={classes['cart-items']}>
        {cartCTX.items.map((item) =>
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)} />)}</ul>
    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart