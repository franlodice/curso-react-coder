import './ItemCart.css'
import { useContext } from 'react';
import  { CartContext }   from '../../context/CartContext';

const ItemCart = (product) =>{
    const { removeItem } = useContext(CartContext);
    return (
        <div key={product.id} className="itemCart">
            <div>
                <img src={product.img} alt={product.name}/>
            </div>
            <div className="productResume">
                <h2>{product.name}</h2>
                <p> Cantidad: {product.quantity} </p>
            </div>
            <div>
            <button onClick={()=> removeItem(product.id)}>Eliminar Producto</button>
            </div>

        </div>
    )
}

export default ItemCart