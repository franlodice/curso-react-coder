import './ItemDetail.css'
import ItemCount from '../ItemCount.js/ItemCount'
import { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemDetail = ({product}) => {

    const [quantity, setQuantity] = useState (0)

    const {addToCart, productDuplicated} = useContext (CartContext)

    const setNotification = useNotificationServices()

    const handleOnAdd = (quantity) => {
        
        if (productDuplicated(product?.id)) {
            setNotification('error', `El producto ya existe en el carrito`)
        } else {
            setQuantity(quantity)
            addToCart(product,quantity)
            setNotification('success', `Se agregó ${product?.name} al carrito`)
        }
    }

    return (
    <article className="CardItem">
            <div className="imgContainer">
                <picture>
                    <img src={product?.img} alt={product?.name} className="ItemImg"/>
                </picture>
            </div>
            <div className="infoContainer">
                    <h2 className="ItemHeader">
                        {product?.name}
                    </h2>
                    <p className="Info">
                        Categoria: {product?.category}
                    </p>
                    <p className="Info">
                        Descripción: {product?.description}
                    </p>
                    <h3>
                        Precio: ${product?.price}
                    </h3> 
     
                    <footer className='ItemFooter'>
                        {
                            quantity > 0 ?
                            <Link to={'/cart'} className='goToCar'> Ir a mi carrito </Link> :
                            <ItemCount stock={product?.stock} initial= {1} onAdd={handleOnAdd}/>
                        }
                    </footer>
            </div>

        </article>
    )
}

export default ItemDetail