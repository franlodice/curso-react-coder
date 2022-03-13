import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({product}) =>{
    
    return (
        <div className="item">
            <img src={product.img} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>Precio: $ {product.price}</p>
            <Link to={`/detail/${product.id}`}>
                <button className="mainButton ButtonAnimation">
                    Ver detalles
                </button>
            </Link>
        </div>
    )
}

export default Item