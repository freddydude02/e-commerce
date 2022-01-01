import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductData";
import { readAll } from "../../services/firebase-utils";
import styles from "./Carousel.module.scss";
import Carousel from "react-elastic-carousel";
import Card from "../../components/Card";
const CarouselDisplay = () => {
    const itemInfo = useContext(ProductContext);

    useEffect(() => readAll("products", itemInfo.setProductData), []);

    const Promo = (type) =>
        itemInfo.productData.filter((item) => item.promo === type);

    const breakPoints = [
        { width: 576, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 992, itemsToShow: 3 },
    ];

    return (
        <div className={styles["carousel-page"]}>
            <h3>Popular "posh" collection</h3>
            <Carousel breakPoints={breakPoints}>
                {Promo("posh").map((item, i) => (
                    <Card key={i} item={item}></Card>
                ))}
            </Carousel>
            <h3>Popular "cool" collection</h3>
            <Carousel breakPoints={breakPoints}>
                {Promo("cool").map((item, i) => (
                    <Card key={i} item={item}></Card>
                ))}
            </Carousel>
        </div>
    );
};
export default CarouselDisplay;
