import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartData";
import { useContext } from "react";

const NavBar = () => {
    const cartInfo = useContext(CartContext);
    const cartNumber = () => {
        return cartInfo.cartData
            .map((item) => {
                return item.qty;
            })
            .reduce((a, b) => a + b);
    };

    return (
        <ul className={styles.navbar}>
            <li className={styles["navbar__link-box"]}>
                <Link className={styles.navbar__link} to="/">
                    Home
                </Link>
            </li>
            <li className={styles["navbar__link-box"]}>
                <Link className={styles.navbar__link} to="/all-products">
                    All Products
                </Link>
            </li>
            <SearchBar></SearchBar>
            <li className={styles["navbar__link-box"]}>
                <Link className={styles.navbar__link} to="/cart">
                    cart({cartNumber()})
                </Link>
            </li>
        </ul>
    );
};
export default NavBar;
// cartInfo.cartData
//             .map((item) => {
//                 return item.qty;
//             })
//             .reduce((a, b) => a + b)
