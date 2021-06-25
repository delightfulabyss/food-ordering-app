import React from 'react'

const cartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (itemId) => {}
})

export default cartContext