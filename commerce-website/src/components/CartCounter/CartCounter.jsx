import { update, deleteDoc } from "../../services/firebase-utils";
import { useContext } from "react";
import { CartContext } from "../../context/CartData";
import styles from "./CartCounter.module.scss";
const CartCounter = ({ item }) => {
    const cartInfo = useContext(CartContext);

    const clickHandler = (value) => {
        update(item.fieldId, { qty: item.qty + value });
        cartInfo.updateCart === 1
            ? cartInfo.setUpdateCart(0)
            : cartInfo.setUpdateCart(1);
    };

    // console.log(item.qty);
    return (
        <div className={styles["cart-counter"]}>
            <button
                className={styles["cart-counter__btn"]}
                onClick={() => {
                    clickHandler(-1);
                }}
            >
                -
            </button>
            <h3 className={styles["cart-counter__qty"]}>{item.qty}</h3>
            <button
                className={styles["cart-counter__btn"]}
                onClick={() => {
                    clickHandler(1);
                }}
            >
                +
            </button>
        </div>
    );
};
export default CartCounter;
