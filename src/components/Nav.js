import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import './Nav.css'
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const {cartItems} = useContext(ShopContext)
  const itemsCount = cartItems?.reduce((prev, current) => {
    return prev + current.count
  },0)
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand text-white rounded p-1"><FontAwesomeIcon icon={faLeaf}/> Garden Shop</a>
        <ul className="navbar-nav">
           <li className="nav-item">
              <Link to="/" className="nav-link">Shop</Link>
           </li>
           <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} />
                {itemsCount > 0 && <span className="cart-items-count">{itemsCount}</span>}
              </Link>
           </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav