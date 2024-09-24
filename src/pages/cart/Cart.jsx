import { useContext } from "react"
import Products from "../../data/Products"
import { ShopContext } from "../../context/ShopContext"
import Product from "../shop/Product"
import "../../App.css"


const Cart = () => {
const {cartItems} = useContext(ShopContext)

    return (
        <div>
            <h1>Your Cart Items</h1>
            <div className="row px-5 py-3 text-center">
                {Products.map((p)=> {
                     if (cartItems.some((i)=> i.id === p.id && i.count > 0))
                     return <Product data={p} />
            })}
            </div>
        </div>
    )
}
export default Cart