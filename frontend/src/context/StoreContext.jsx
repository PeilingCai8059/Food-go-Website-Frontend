import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

function StoreContextProvider({children}){
    const [cartItems,setCartItems] = useState({})

    const addToCart = (itemId) => {
        if( !cartItems[itemId]){
            setCartItems({...cartItems,[itemId]:1})
        }else{
            setCartItems({...cartItems,[itemId]:cartItems[itemId]+1})
        }
    }
    
    const removeFromCart = (itemId) => {
        setCartItems({...cartItems,[itemId]:cartItems[itemId]-1})
    }
    const getTotal =()=>{
        let total = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = food_list.find((product)=> product._id === item);
                total += itemInfo.price * cartItems[item];
            }
        }
        return total;
    }

    const [showLogin, setShowlogin] = useState(false);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        showLogin,
        setShowlogin,
        getTotal
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;