import {useState} from 'react'
import './ItemCount.css'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemCount = ({stock, initial, onAdd}) => {

    const setNotification = useNotificationServices()
    const [quantity, setQuantity] = useState(initial)

const decrement = () => {
    if (quantity > 1) {
        setQuantity (quantity-1)
    } else  {
        setNotification('error', `Debes agregar al menos 1 producto`)
    }
}

const increment = () => {
    if (quantity < stock) {
    setQuantity (quantity+1)
    } else  {
        setNotification('error', `No tenemos más stock disponible`)
    }
    
}


return(
    <>
        <div className="contador">
            <button onClick={decrement}>-</button>
            <h3>{quantity}</h3>
            <button onClick={increment}>+</button>
        </div>
        <div className="mainButton0">
            <button onClick={()=> onAdd(quantity)}>AGREGAR AL CARRITO</button>
        </div>
    </>
)
}

export default ItemCount