import styles from "./Grid.module.scss";
import Card from "../../components/Card";
import { useState, useEffect, useContext } from "react";
import { create, readAll } from "../../services/firebase-utils";
import { ProductContext } from "../../context/ProductData";

// create(
//     productFactory(
//         "black-leather-shoes",
//         "$70",
//         "some shades",
//         "https://hipnewjersey.com/wp-content/uploads/2016/06/mirrror.jpg"
//     )
// );
const Grid = () => {
    const itemInfo = useContext(ProductContext);

    useEffect(() => readAll("products", itemInfo.setProductData), []);

    return (
        <div className={styles["grid-container"]}>
            <div className={styles["card-container"]}>
                {itemInfo.productData.map((item, i) => (
                    <Card key={i} item={item}></Card>
                ))}
            </div>
        </div>
    );
};
export default Grid;
