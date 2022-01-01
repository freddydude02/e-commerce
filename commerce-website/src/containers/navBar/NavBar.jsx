import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
const NavBar = () => {
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
                    cart
                </Link>
            </li>
        </ul>
    );
};
export default NavBar;
