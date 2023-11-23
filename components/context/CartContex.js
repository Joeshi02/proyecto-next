"use client"
import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    console.log('carrito: ', cartList);
    const addItem = (item, quantity) => {
        let itemQty = {...item,quantity}
        if (!isInCart(item.id)){
            setCartList([...cartList, itemQty])
        }else {
            const newProducts = cartList.map(prod => {
                if (prod.id === item.id){
                    const newProduct = {
                        ...prod,
                        quantity: prod.quantity + quantity
                    }
                    return newProduct
                }else{
                    return prod
                }
            })
            setCartList(newProducts)
        }
    };
    
    const removeItem = (itemId) => {
        const remove = cartList.filter((item) => item.id !== itemId);
        setCartList(remove);
    };
    const clear = () => {
        setCartList([]);
    };
    const isInCart = (itemId) => {
        return cartList.some((item) => item.id === itemId);
    };
    const getQty = () => {
        let cantidad = 0
        cartList.forEach((e) => cantidad += e.quantity)
        return cantidad
    };
    
    const getTotal = () => {
        let total = 0
        cartList.forEach((e) => total += (e.quantity*e.price))
        return total        
    };
    
    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear, isInCart, getQty, getTotal }}>
            {children}
        </CartContext.Provider>
    );
    
};
export default CartContextProvider;