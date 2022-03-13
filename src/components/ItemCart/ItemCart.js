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
                <div className="detail">
                    <p> Cantidad: {product.quantity} </p>
                    <p>Precio: ${product.price}</p>
                </div>
            </div>
            <div>
                <h3>Sub-total: ${product.price * product.quantity}</h3>
            </div>
            <div>
                <button className="mainButton2" onClick={()=> removeItem(product.id)}>Eliminar Producto</button>
            </div>
        </div>
    )
}

export default ItemCart