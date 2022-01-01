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
// <button
//     onClick={() => {
//         create({
//             description: "it's black leather shoes",
//             price: 120,
//             id: "black-leather-shoes",
//             img: "https://media.istockphoto.com/photos/elegant-black-leather-shoes-picture-id172417586?b=1&k=20&m=172417586&s=170667a&w=0&h=D26AYo2w8U1729-GJ3swMOq5QfthijDxW6cjVCVGOU8=",
//             name: "Black leather shoes",
//         });
//     }}
// >
//     create
// </button>
