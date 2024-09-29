import Products from "../../data/Products"
import Product from "./Product"
import "../../App.css"

const Shop =() => {

    return(
        <div>
            <div className="row mb-5" style={{textAlign: "center"}}>
                {Products.map((productData) => <Product key={productData.id} data={productData} />)}
            </div>
        </div>
    )
}
export default Shop