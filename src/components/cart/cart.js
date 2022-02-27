import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            {cart.map((product) => (
                <li key={product.id}>{product.quantity}  {product.name}</li>
                
            ))}
        </>
    );
};

export default Cart;