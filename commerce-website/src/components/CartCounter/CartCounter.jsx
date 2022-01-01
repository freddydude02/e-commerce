import { update, increment } from "../../services/firebase-utils";
import styles from "./CartCounter.module.scss";
const CartCounter = ({ item }) => {
    return (
        <div className={styles["cart-counter"]}>
            <button
                className={styles["cart-counter__btn"]}
                onClick={() => {
                    update(item.fieldId, { qty: increment(-1) });
                }}
            >
                -
            </button>
            <h3 className={styles["cart-counter__qty"]}>{item.qty}</h3>
            <button
                className={styles["cart-counter__btn"]}
                onClick={() => {
                    update(item.fieldId, { qty: increment(1) });
                }}
            >
                +
            </button>
        </div>
    );
};
export default CartCounter;
