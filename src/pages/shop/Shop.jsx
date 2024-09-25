import Products from "../../data/Products"
import Product from "./Product"
import "../../App.css"

const Shop =() => {

    return(
        <div>
            <h1 className="text-center" style={{color: "black"}}><h1>Indoor Plants</h1></h1>
            <div className="row mb-5" style={{textAlign: "center"}}>
                {Products.map((productData) => <Product key={productData.id} data={productData} />)}
            </div>
        </div>
    )
}
export default Shop