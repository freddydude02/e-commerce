import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
    return (
        <div className={styles.card}>
            <Link to={"/all-products/" + item.id}>
                <img src={item.img} className={styles.card__img}></img>
            </Link>
            <h1 className={styles.card__title}>{item.name}</h1>
            <h2 className={styles.card__price}>${item.price}</h2>
            <p className={styles.card__description}>{item.description}</p>
        </div>
    );
};
export default Card;
