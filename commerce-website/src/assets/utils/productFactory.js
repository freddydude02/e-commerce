const productFactory = (id, img, color, size, price, qty) => {
    return {
        id: id,
        img: img,
        color: color,
        size: size,
        price: price,
        qty: qty,
    };
};
export default productFactory;
