import './cart.css'
import { useContext } from 'react';
import  { CartContext }   from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import {Link} from 'react-router-dom';

const Cart = () => {
    const { cart, getTotal, cleaningCart } = useContext(CartContext);

    if(cart.length === 0){
        return <>
        <h1>No hay productos en el carrito</h1> 
        <Link to={'/'}> Ver Productos </Link>
        </>
        
    }

    return (
        <>
            <h1>Cart</h1>
            <div className="cart">
                {
                    cart.map (product => {
                        return (
                            <ItemCart key={product.id} {...product}></ItemCart>
                        )
                    }
                        
                )}
            </div>
            <button className="alternativeButton" onClick={()=> cleaningCart()}>Vaciar Carrito</button>
            <h2>Total: ${getTotal()}</h2>
        </>
    );
};

export default Cart;