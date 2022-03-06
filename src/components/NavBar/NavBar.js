import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const NavBar = () => {

    const { cart } = useContext (CartContext)
    return (
      <nav className='NavBar'>
        <NavLink to={'/'}><img src={"./images/epaamarillo_simple.svg"} alt="Logotipo EPA" className='logoNav zoomMenu'/></NavLink>
        <div>
        <ul className='menu'>
          <li className='categories'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'categorieSelected' : 'Option'}>HOME</NavLink>
          </li>
          <li className='categories zoomMenu'>
            <NavLink to={'/category/snacks'} className={({ isActive }) => isActive ? 'categorieSelected' : 'Option'} 
          >SNACKS</NavLink>
          </li>
          <li className='categories zoomMenu'>
            <NavLink to={'/category/bebidas'}className={({ isActive }) => isActive ? 'categorieSelected' : 'Option'} >BEBIDAS</NavLink>
          </li>
          <li className='categories zoomMenu'>
            <NavLink to={'/category/golosinas'}className={({ isActive }) => isActive ? 'categorieSelected' : 'Option'} >GOLOSINAS</NavLink>
          </li>
        </ul>
        </div>
        <div>
          {cart.length > 0 && <CartWidget colorText='white'/>}
        </div>
      </nav>
    )
}

export default NavBar