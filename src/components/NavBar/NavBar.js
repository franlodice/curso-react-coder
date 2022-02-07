import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
      <nav className='NavBar'>
        <a href="#"><img src={"./images/epaamarillo_simple.svg"} alt="Logotipo EPA" className='logoNav zoomMenu'/></a>
        <div>
        <ul className='menu'>
          <li className='categories'>
            <a className='categorieSelected' href='#'>HOME</a>
          </li>
          <li className='categories zoomMenu'>
            <a href='#snacks'>SNACKS</a>
          </li>
          <li className='categories zoomMenu'>
            <a href='#bebidas'>BEBIDAS</a>
          </li>
          <li className='categories zoomMenu'>
            <a href='#golosinas'>GOLOSINAS</a>
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