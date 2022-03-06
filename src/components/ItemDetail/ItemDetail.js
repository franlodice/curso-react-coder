import './ItemDetail.css'
import ItemCount from '../ItemCount.js/ItemCount'
import { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemDetail = ({product}) => {
    const [quantity, setQuantity] = useState (0)

    const {addToCart} = useContext (CartContext)

    const setNotification = useNotificationServices()

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        addToCart(product,quantity)
        setNotification('success', `Se agregó ${product?.name} al carrito`)
    }


    return (
    <article className="CardItem">
            <picture>
                <img src={product?.img} alt={product?.name} className="ItemImg"/>
            </picture>
            <section>
                <h2 className="ItemHeader">
                    {product?.name}
                </h2>
                <p className="Info">
                    Categoria: {product?.category}
                </p>
                <p className="Info">
                    Descripción: {product?.description}
                </p>
                <p className="Info">
                    Precio: {product?.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantity > 0 ?
                    <Link to={'/cart'} className='goToCar'> Ir a mi carrito </Link> :
                    <ItemCount stock={product?.stock} initial={1} onAdd={handleOnAdd}/>
                }
            </footer>
        </article>
    )
}

export default ItemDetail