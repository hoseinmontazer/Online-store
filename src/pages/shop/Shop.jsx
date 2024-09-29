import Products from "../../data/Products"
import Product from "./Product"
import "../../App.css"

const Shop =() => {

    return(
        <div style={{textAlign: "center", overflow:"auto", boxSizing:"border-box",maxHeight:"92vh", overflowX:"hidden"}}>
            <div className="row my-5" >
                {Products.map((productData) => <Product key={productData.id} data={productData} />)}
            </div>
        </div>
    )
}
export default Shop