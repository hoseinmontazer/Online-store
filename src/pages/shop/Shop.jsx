import Products from "../../data/Products"
import Product from "./Product"
import "../../App.css"

const Shop =() => {

    return(
        <div>
            <h1 className="text-center">Indoor Plants</h1>
            <div className="row" style={{textAlign: "center"}}>
                {Products.map((productData) => <Product key={productData.id} data={productData} />)}
            </div>
        </div>
    )
}
export default Shop