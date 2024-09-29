import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState();

    useEffect(() => {
        const data = localStorage.getItem("cartItemsHook")
        setCartItems(!!JSON.parse(data) ? JSON.parse(data) : [])
    },[])
    useEffect(() => {
        if (cartItems !== undefined)
            localStorage.setItem("cartItemsHook", JSON.stringify(cartItems))
    },[cartItems])


    // const TotalPrice = () => {
    //   setCartItems( cartItems.reduce((prev,currenPrice)=>{
    //     console.log(prev, currenPrice);
    //     if (prev.price) {
    //         return prev.price + currenPrice
    //     }
    //     return prev.price + currenPrice
    // }))
    //   }

    const addToCart = (itemId, itemPrice) => {
        console.log(itemPrice)
        if (!cartItems?.find((item) => item.id === itemId)){
            setCartItems([...cartItems, { id: itemId, count: 1 , price: itemPrice}])
        }else
            setCartItems(cartItems.map((item) => {
                if (item.id === itemId)
                    return { ...item, count: item.count + 1 , price: itemPrice}
                else return item
                
            }))
    }
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.map((i) => {
            if (i.id === itemId)
                return { ...i, count: i.count === 0 ? 0 : i.count - 1 }
            else return i
        }))
    }
    const contextValue = { cartItems, addToCart, removeFromCart }
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}


