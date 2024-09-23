import "../../App.css"
const Product = (props) => {

    const {id, productName, price, productImage} = props.data
    return (
        <div className="col-4 px-5 py-3">
            <img src={productImage} alt="plant" className="w-100" />
            <h5 className="pt-2">{productName}</h5>
            <p>price: {price}$</p>
            <button className="btn btn-info btn-sm">+</button>
            <span className="mx-1">0</span>
            <button className="btn btn-info btn-sm">-</button>
        </div>
    )

}
export default Product