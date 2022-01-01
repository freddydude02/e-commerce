import Card from "../../components/Card";
import styles from "./ProductPage.module.scss";
import { readAll } from "../../services/firebase-utils";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductData";
import productFactory from "../../assets/utils/productFactory";
import { create } from "../../services/firebase-utils";
const ProductPage = () => {
    let { params } = useParams();
    const itemInfo = useContext(ProductContext);
    useEffect(() => readAll("products", itemInfo.setProductData), []);

    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [qty, setQty] = useState("");

    const filter = itemInfo.productData.filter((item) => {
        return item.id == params;
    });

    console.log(color);
    console.log(size);

    return filter.length !== 0 ? (
        <div className={styles["product-page"]}>
            <h1>Hi! This is the product page for our {filter[0].name}!</h1>
            <img
                className={styles["product-page__img"]}
                src={filter[0].img}
            ></img>

            <p>{filter[0].description}</p>

            <label>Color:</label>
            <select
                name="colors"
                id="colors"
                onChange={(e) => setColor(e.target.value)}
                required
            >
                <option value="">--Pick a color--</option>
                <option value="grey">--Grey--</option>
                <option value="brown">--Brown--</option>
                <option value="white">--White--</option>
            </select>
            <label>Size:</label>
            <select
                name="colors--"
                id="colors"
                onChange={(e) => setSize(e.target.value)}
            >
                <option value="">--Pick a size--</option>
                <option value="small">--small--</option>
                <option value="medium">--medium--</option>
                <option value="large">--large--</option>
            </select>
            <br></br>

            <h1>${filter[0].price}</h1>

            <label>Qty:</label>
            <input
                type="number"
                min="1"
                onChange={(e) => setQty(e.target.value)}
            ></input>
            <button
                onClick={() =>
                    color === ""
                        ? console.log("please pick a color")
                        : size === ""
                        ? console.log("please pick a size")
                        : qty === ""
                        ? console.log("please pick a quantity")
                        : create(
                              productFactory(
                                  filter[0].id,
                                  filter[0].img,
                                  color,
                                  size,
                                  filter[0].price,
                                  qty
                              )
                          )
                }
            >
                Add to cart!
            </button>
        </div>
    ) : (
        <></>
    );
};
export default ProductPage;
