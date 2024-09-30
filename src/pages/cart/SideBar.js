import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import "../../App.css";

const SideBar = () => {

    const { cartItems } = useContext(ShopContext) || { cartItems: [] };
    const [total, setTotal] = useState(0);


    useEffect(() => {
        let subtotal = 0;
        cartItems?.forEach((item) => (subtotal += item.count * item.price));
        setTotal(subtotal);
    }, [cartItems]);

    return (

        <div className="sidebar flex flex-1 col-lg-2 mb-5 p-20 text-left ">
            <h2>Total Price: {total}$</h2><br />
            <h6>Delivery Friday, October 11</h6>
            <h6>fastest delivery Tuesday, October 8</h6><br />
            <h4 className="text-success">In Stock</h4>

            <div className="additional-info mt-2">
                <ul className="list-unstyled text-primary small">
                    <li ><strong className="text-dark">Ships from:</strong> Garden Shop</li>
                    <li ><strong className="text-dark">Returns:</strong> 30-day refund/replacement</li>
                    <li ><strong className="text-dark">Payment:</strong> Secure transaction</li>
                </ul>
            </div>

            <button className="btn btn-dark my-1 text-center" style={{ color: "#fff" }} >
                Buy now
            </button>
        </div>
    )
}
export default SideBar