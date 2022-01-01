import styles from "./CartCard.module.scss";
import { Link } from "react-router-dom";
import CartCounter from "../CartCounter";

const CartCard = ({ item }) => {
    return (
        <div className={styles["cart-card"]}>
            <Link to={"/all-products/" + item.id}>
                <img src={item.img} className={styles["cart-card__img"]}></img>
            </Link>
            <h1 className={styles["cart-card__title"]}>{item.id}</h1>
            <h2 className={styles["cart-card__price"]}>${item.price}</h2>
            <p className={styles["cart-card__description"]}>{item.size}</p>
            <p className={styles["cart-card__description"]}>{item.color}</p>
            <CartCounter item={item}></CartCounter>
            <h2 className={styles["cart-card__description"]}>
                ${item.price * item.qty}
            </h2>
        </div>
    );
};
export default CartCard;
