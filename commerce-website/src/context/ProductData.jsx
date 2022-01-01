import { useState, createContext } from "react";

export const ProductContext = createContext();
const ProductDataProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);
    const itemInfo = { productData, setProductData };

    return (
        <ProductContext.Provider value={itemInfo}>
            {children}
        </ProductContext.Provider>
    );
};
export default ProductDataProvider;
