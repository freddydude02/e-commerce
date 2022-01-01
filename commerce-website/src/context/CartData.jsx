import { useState, createContext } from "react";

export const CartContext = createContext();
const CartDataProvider = ({ children }) => {
    const [CartData, setCartData] = useState([]);
    const CartInfo = { CartData, setCartData };

    return (
        <CartContext.Provider value={CartInfo}>{children}</CartContext.Provider>
    );
};
export default CartDataProvider;
