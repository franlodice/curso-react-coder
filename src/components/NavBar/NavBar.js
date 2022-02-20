import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
      <nav className='NavBar'>
        <NavLink to={'/'}><img src={"./images/epaamarillo_simple.svg"} alt="Logotipo EPA" className='logoNav zoomMenu'/></NavLink>
        <div>
        <ul className='menu'>
          <li className='categories'>
            <NavLink to={'/'} className='categorieSelected'>HOME</NavLink>
          </li>
          <li className='categories zoomMenu'>
            <NavLink to={'/category/snacks'}>SNACKS</NavLink>
          </li>
          <li className='categories zoomMenu'>
            <NavLink to={'/category/bebidas'}>BEBIDAS</NavLink>
          </li>
          <li className='categories zoomMenu'>
            <NavLink to={'/category/golosinas'}>GOLOSINAS</NavLink>
          </li>
        </ul>
        </div>
        <div>
        <CartWidget colorText='white'/>
        </div>
      </nav>
    )
}

export default NavBar