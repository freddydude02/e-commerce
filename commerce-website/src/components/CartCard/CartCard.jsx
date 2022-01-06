import styles from "./CartCard.module.scss";
import { deleteDoc } from "../../services/firebase-utils";
import { Link } from "react-router-dom";
import CartCounter from "../CartCounter";

const CartCard = ({ item }) => {
    return item.qty !== 0 ? (
        <div className={styles["cart-card"]}>
            <Link to={"/all-products/" + item.id}>
                <img src={item.img} className={styles["cart-card__img"]}></img>
            </Link>
            <div className={styles["cart-card__details"]}>
                <h1 className={styles["cart-card__title"]}>{item.id}</h1>
                <h2 className={styles["cart-card__price"]}>${item.price}</h2>
                <p className={styles["cart-card__description"]}>{item.size}</p>
                <p className={styles["cart-card__description"]}>{item.color}</p>
                <CartCounter item={item}></CartCounter>
                <h2 className={styles["cart-card__description"]}>
                    ${item.price * item.qty}
                </h2>
            </div>
        </div>
    ) : (
        <>{deleteDoc(item.fieldId)}</>
    );
};
export default CartCard;
