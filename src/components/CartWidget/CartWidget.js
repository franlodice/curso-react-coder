import './CartWidget.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = ({colorText}) => {

    const {getQuantity} = useContext (CartContext)

    return (
        <div className='zoomMenu cartWidget' style={{color: colorText}}>
            <Link to={'/cart'}>
                <img src={"../images/car_icon.svg"} alt="Cart" className='cartIcon'/>
            </Link>
            <p>{getQuantity()}</p>
        </div>
    )
}
export default CartWidget