import './Item.css'

const Item = ({product}) =>{
    return (
        <div className="item">
            <h3>{product.name}</h3>
            <img src={product.img}/>
            <p>$ {product.price}</p>
        </div>
    )
}

export default Item