import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({product}) =>{
    return (
        <div className="item">
            <h3>{product.name}</h3>
            <img src={product.img} alt={product.name}/>
            <p>$ {product.price}</p>
            <Link to={`/detail/${product.id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item