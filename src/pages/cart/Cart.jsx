import React, { useContext, useEffect, useState } from "react";
import Products from "../../data/Products";
import { ShopContext } from "../../context/ShopContext";
import Product from "../shop/Product";
import "../../App.css";

const Cart = (
) => {
    const { cartItems } = useContext(ShopContext) || { cartItems: [] };
    const [total, setTotal] = useState(0);

    const TempItem = (
    ) => {
        var subtotal = 0;
        cartItems?.forEach((item) => subtotal += item.count * item.price);
        setTotal(subtotal);
    };

    useEffect(() => {
        TempItem();
    }, [cartItems]);

    return (
        <div style={{ overflow: "auto", maxHeight: "95vh" }}>
            <div className="row px-5 mb-5 text-center">
                {Products.map((p) => {
                    if (cartItems?.some((i) => i.id === p.id && i.count > 0))
                        return <Product data={p} />;
                })}
            </div>
            <div className="row text-center mb-5">
                <h2>Your total price: {total}$</h2>
            </div>
        </div>
    );
};

export default Cart;
