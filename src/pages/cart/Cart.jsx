import React, { useContext } from "react";
import Products from "../../data/Products";
import { ShopContext } from "../../context/ShopContext";
import Product from "../shop/Product";
import "../../App.css";
import SideBar from "./SideBar"; // Import the SideBar component

const Cart = () => {
  const { cartItems } = useContext(ShopContext) || { cartItems: [] };
  
  // Determine if the cart has any items
  const hasItemsInCart = cartItems?.some((item) => item.count > 0);

  return (
    <div className="cartContainer d-flex flex-column flex-lg-row" style={{ maxHeight: "87vh" }}>
      {/* Main content area */}
      <div className={`productPages ${hasItemsInCart ? "col-lg-10" : "col-12"}`} style={{ overflowX: "hidden" }}>
        <div className="row px-5 mb-3 text-center">
          {Products.map((p) => {
            if (cartItems?.some((i) => i.id === p.id && i.count > 0))
              return <Product key={p.id} data={p} />;
          })}
          {/* Display a message if the cart is empty */}
          {!hasItemsInCart && (
            <div className="col-12">
              <h2 className="text-center mt-5">Your cart is currently empty.</h2>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar will only be shown if there are items in the cart */}
      {hasItemsInCart && <SideBar />}
    </div>
  );
};

export default Cart;
