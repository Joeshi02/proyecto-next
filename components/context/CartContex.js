"use client"

import { createContext, useContext, useState } from "react"

const CartContex = createContext()
export const useCartContext = () => useContext(CartContex)

export const CartProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    
    const addItem = (item) => {
        setCartList([...cartList, item])
    }
    const isInCart = (id) => {
        return cartList.some(item => item.id === id)
    }
    const totalQty =() => {
        return cartList.reduce((acc, item) => acc + item.quantity, 0)
    }
    const clear = () => {
        setCartList([])
    }
    const getTotal = () => {
        let total = 0 
        cartList.forEach((e) => total += (e.quantity*e.price))
        return total
    }
    const removeItem = (itemId) => {
        const remove = cartList.filter((item) => item.id !== itemId);
        setCartList(remove);
      };
return(
    <CartContex.Provider value={{
        cartList,
        addItem,
        isInCart,
        totalQty,
        clear,
        getTotal,
        removeItem}}>
        {children}
    </CartContex.Provider>
)}