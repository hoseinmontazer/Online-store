import { useContext } from "react"
import "../../App.css"
import { ShopContext } from "../../context/ShopContext"
const Product = (props) => {

    const {id, productName, price, productImage} = props.data
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)

    const isInCart = cartItems?.some((item)=> item.id === id)
    return (
        <div className="col-4 px-5 py-3">
            <img src={productImage} alt="plant" />
            <h5 className="pt-2">{productName}</h5>
            <p>price: {price}$</p>
            <button className="btn btn-info btn-sm" onClick={()=> addToCart(id)}>+</button>
            <span className="mx-1">{cartItems?.filter((row)=> row.id === id)[0]?.count}</span>
            {isInCart && <button className="btn btn-info btn-sm" onClick={()=> removeFromCart(id)}>-</button>}
        </div>
    )

}
export default Product