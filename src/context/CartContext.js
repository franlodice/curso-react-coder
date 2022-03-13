import {  useState, createContext } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);


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



    const removeItem = ( id ) =>{
        const filterProducts = cart.filter((prod)=>prod.id !== id)
        setCart(filterProducts)
    } 


    const cleaningCart = ()=>{
        setCart([])
    } 


    const getQuantity = () => {
        let count = 0
        cart.forEach(prod  =>{
            count = count + prod.quantity
        })
        return count
    }


    const getTotal = () => {
        let total =0
        cart.forEach(prod =>{
            total = total + prod.price * prod.quantity
        })
        return total
    }


    const productDuplicated = (id) => {
        return cart.find((producto) => producto.id === id);
    };

    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, cleaningCart, getQuantity, getTotal, productDuplicated }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext

