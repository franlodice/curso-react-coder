import { useEffect, useState, createContext } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const cartVerify = (id) => {
        return cart.some((producto) => producto.id === id);
    };
    
    const addToCart = (product, quantity) => {
        cartVerify(product.id)
            ? addQuantity (product, quantity)
            : setCart([...cart, { ...product,  quantity }]);
    };

    const addQuantity = (product, quantity) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === product.id) {
                const newProduct = {
                    ...prod,
                    quantity: prod.quantity + quantity,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };

    //Para eliminar un producto del carrito (Proximamente)
    const removeItem = ( id ) =>{
        const filterProducts = cart.filter((prod)=>prod.id !== id)
        setCart(filterProducts)
    } 

    //Para vaciar el carrito (Proximamente)
    const cleaningCart = ()=>{
        setCart([])
    } 

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, cleaningCart }}>
            {children}
        </CartContext.Provider>
    );
};

