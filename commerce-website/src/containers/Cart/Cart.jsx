import { readAll } from "../../services/firebase-utils";
import { useEffect, useContext } from "react";
import { CartContext } from "../../context/CartData";
import CartCard from "../../components/CartCard/CartCard";
import styles from "./Cart.module.scss";

const Cart = () => {
    const cartInfo = useContext(CartContext);
    useEffect(() => readAll("cart", cartInfo.setCartData), []);

    return (
        <div className={styles["cart-page"]}>
            <div className={styles["cart-page__grid"]}>
                {cartInfo.cartData.map((item, i) => (
                    <CartCard key={i} item={item}></CartCard>
                ))}
            </div>
            <div className={styles["cart-page__checkout"]}>
                <h1>
                    total checkout price:
                    {cartInfo.cartData.length &&
                        cartInfo.cartData
                            .map((item) => item.price * item.qty)
                            .reduce((a, b) => a + b)}
                </h1>
            </div>
        </div>
    );
};
export default Cart;
