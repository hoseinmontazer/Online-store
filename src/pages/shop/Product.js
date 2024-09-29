import { useContext } from "react"
import "../../App.css"
import { ShopContext } from "../../context/ShopContext"
const Product = (props) => {

    const {id, productName, price, productImage} = props.data
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)

    const isInCart = cartItems?.some((item)=> item.id === id)
    return (
        <div className="col-12 col-md-4 col-lg-4 p-md-5 p-3">
            <img src={productImage} alt="plant" className="img-fluid" />
            <h5 className="py-1">{productName}</h5>
            <p>price: {price}$</p>
            <button className="btn btn-dark btn-sm" onClick={()=> addToCart(id, price)}>+</button>
            <span className="mx-1">{cartItems?.filter((row)=> row.id === id)[0]?.count}</span>
            {isInCart && <button className="btn btn-dark btn-sm" onClick={()=> removeFromCart(id)}>-</button>}
        </div>
    )

}
export default Product  