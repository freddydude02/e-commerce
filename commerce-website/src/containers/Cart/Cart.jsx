import { increment, readAll, update } from "../../services/firebase-utils";
import { useState, useEffect } from "react";
import CartCard from "../../components/CartCard/CartCard";
import CartCounter from "../../components/CartCounter";
import styles from "./Cart.module.scss";

const Cart = () => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => readAll("cart", setCartData), []);

    // update(cartData.fieldId)

    return (
        <div className={styles["cart-page"]}>
            <div className={styles["cart-page__card"]}>
                {cartData.map((item, i) => (
                    <CartCard key={i} item={item}></CartCard>
                ))}
            </div>
        </div>
    );
};
export default Cart;
