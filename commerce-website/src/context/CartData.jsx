import { useState, createContext, useEffect } from "react";
import { readAll } from "../services/firebase-utils";

export const CartContext = createContext();
const CartDataProvider = ({ children }) => {
    const [updateCart, setUpdateCart] = useState(1);
    const [cartData, setCartData] = useState([updateCart]);
    useEffect(() => readAll("cart", setCartData), [updateCart]);

    const cartInfo = { cartData, setCartData, updateCart, setUpdateCart };

    return (
        <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
    );
};
export default CartDataProvider;
