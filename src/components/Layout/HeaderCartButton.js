import React, {useContext, useEffect, useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/CartContext'

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCTX = useContext(CartContext)
    const { items } = cartCTX
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)
  
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
  
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true)
    const timer  = setTimeout(() => {
      setBtnIsHighlighted(false)

    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])
    return (
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    );
}

export default HeaderCartButton
